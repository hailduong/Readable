import React from "react";
import * as actionsObject from "../actions/actions";
import {Link} from "react-router-dom";
import moment from "moment";

import {connect} from "react-redux";

class Post extends React.Component {

	handleUpVote = () => {
		const thisPostID = this.props.content.id;
		this.props.upVotePost(thisPostID);
	};

	handleDownVote = () => {
		const thisPostID = this.props.content.id;
		this.props.downVotePost(thisPostID);
	};

	handleEditPost = () => {
		// TODO: Edit Post	
	};

	handleDeletePost = () => {
		const postID = this.props.content.id;
		this.props.deletePost(postID);
	};

	render() {

		const {id, timestamp, title, body, author, category, voteScore, deleted} = this.props.content;
		let {thumbnailURL} = this.props.content;
		const random1To3 = Math.floor(Math.random() * 3) + 1;
		if (!thumbnailURL) thumbnailURL = `/images/thumbnail_${random1To3}.jpg`;

		const postLink = `/${category}/${id}`;
		const editLink = `/edit-post/${id}`;

		const postComments = (() => {
			if (!!this.props.comments && !!this.props.comments[id]) {
				return this.props.comments[id];
			}
			return [];
		})();
		
		const numberOfComments = postComments.length;
		const formattedDate = moment(timestamp).format("MMM DD YYYY"); 

		return (
			<div className="clearfix global__post m-b-xl animated fadeIn" data-id={id}>
				<div className="col-sm-4 thumbnail">
					<img className="img-responsive" src={thumbnailURL}/>
				</div>
				<div className="col-sm-8 caption">
					<h3 className="m-t-none"><a className="post-title" href={postLink}>{title}</a></h3>
					<p>{body}</p>
					<p>Vote: <strong>{voteScore}</strong> |
						Date: <strong>{formattedDate}</strong> |
						Category: <strong>{category}</strong> |
						Comments: <strong>{numberOfComments}</strong>
					</p>
					<div className="btn-group m-r-sm" role="group">
						<button onClick={this.handleUpVote} type="button" className="btn btn-default">Up Vote</button>
						<button onClick={this.handleDownVote} type="button" className="btn btn-default">Down Vote</button>
					</div>
					<div className="btn-group" role="group">
						<Link to={editLink} onClick={this.handleEditPost} className="btn btn-default">Edit</Link>
						<button onClick={this.handleDeletePost} type="button" className="btn btn-default">Delete</button>
					</div>
				</div>
			</div>
		)
	}

	componentDidMount() {
		const thisPostID = this.props.content.id;
		this.props.getAllComments(thisPostID);
	}
}

const mapStateToProps = (state) => ({
	posts: state.posts,
	comments: state.comments
});

const mapDispatchToProps = (dispatch) => ({
	upVotePost: (postID) => {
		dispatch(actionsObject.upVotePost(postID))
	},
	downVotePost: (postID) => {
		dispatch(actionsObject.downVotePost(postID))
	},
	deletePost: (postID) => {
		dispatch(actionsObject.deletePost(postID))
	},
	editPost: ({id, title, body}) => {
		// TODO: Edit Post
		dispatch(actionsObject.editPost({id, title, body}))
	},
	getAllComments: (postID) => {
		dispatch(actionsObject.getAllComments(postID))
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);