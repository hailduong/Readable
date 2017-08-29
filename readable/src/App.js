import React, {Component} from 'react';
import Navbar from "./components/Navbar";
import ListPage from "./components/ListPage";
import PostPage from "./components/PostPage";
import * as actionsObject from "./actions";

import {BrowserRouter, Route} from 'react-router-dom'


import {connect} from "react-redux";

import './App.css';


class App extends Component {
	render() {

		const {getAllPosts, getSinglePost, getCategoryPosts, posts, comments} = this.props;

		return (
			<BrowserRouter>
				<div>
					<Navbar/>
					<Route exact path="/" render={() => {
						return (
							<ListPage getAllPosts={getAllPosts}
									  posts={posts}
									  comments={comments}
							/>
						)
					}}/>
					<Route exact path="/:category" render={(props) => {
						return (
							<ListPage getCategoryPosts={getCategoryPosts}
									  match={props.match}
									  posts={posts}
									  comments={comments}
							/>
						)
					}}/>
					<Route path="/:category/:post" render={(props) => {
						return (
							<PostPage getSinglePost={getSinglePost}
									  match={props.match}
									  post={posts}
									  comments={comments}
							/>
						)
					}}/>
				</div>
			</BrowserRouter>
		);
	}
}

const mapStateToProps = (state) => ({
	posts: state.posts,
	comments: state.comments
});

const mapDispatchToProps = (dispatch) => ({
	getAllPosts: () => {
		dispatch(actionsObject.getAllPosts())
	},
	getCategoryPosts: (category) => {
		dispatch(actionsObject.getCategoryPosts(category))
	},
	getSinglePost: (postID) => {
		dispatch(actionsObject.getSinglePost(postID))
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(App);