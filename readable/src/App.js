import React, {Component} from 'react';
import Navbar from "./components/Navbar";
import ListPage from "./components/ListPage";
import PostDetailPage from "./components/PostDetailPage";
import AddPostPage from "./components/AddPostPage";
import EditPostPage from "./components/EditPostPage";
import * as actionsObject from "./actions/actions";

import {BrowserRouter, Route} from 'react-router-dom'


import {connect} from "react-redux";

import './App.css';


class App extends Component {
	render() {

		const {getAllPosts, getCategoryPosts, posts, comments} = this.props;

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
					<Route exact path="/:category(react|redux|udacity)" render={(props) => {
						return (
							<ListPage getCategoryPosts={getCategoryPosts}
									  match={props.match}
									  posts={posts}
									  comments={comments}
							/>
						)
					}}/>
					<Route exact path="/:category(react|redux|udacity)/:post" render={(props) => {
						return (
							<PostDetailPage match={props.match}/>
						)
					}}/>
					<Route exact path="/add-new-post" render={(props) => {
						return (
							<AddPostPage addNewPost={this.props.addNewPost} history={props.history}/>
						)
					}}/>
					<Route exact path="/edit-post/:postID" render={(props) => {
						return (
							<EditPostPage posts={this.props.posts}
										  match={props.match}
										  history={props.history}
										  editPost={this.props.editPost}
										  getSinglePost={this.props.getSinglePost}
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
	addNewPost: ({id, timestamp, postTitle, postContent, postAuthor, postCategory} = {}) => {
		dispatch(actionsObject.addNewPost({id, timestamp, postTitle, postContent, postAuthor, postCategory}))
	},
	editPost: ({id, title, body}) => {
		dispatch(actionsObject.editPost({id, title, body}))
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(App);