import React, {Component} from 'react';
import Navbar from "./global/Navbar";
import ListPage from "./posts/PostListPage";
import PostDetailPage from "./posts/PostDetailPage";
import AddPostPage from "./posts/PostAddPage";
import EditPostPage from "./posts/PostEditPage";
import * as actionsObject from "./posts/PostActions";

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

const mapStateToProps = ({posts, comments}) => ({
	posts, comments
});

const mapDispatchToProps = (dispatch) => ({
	getSinglePost: (postID) => {
		dispatch(actionsObject.getSinglePost(postID))
	},
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