import React from "react";
import * as actionsObject from "../actions";

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

	render() {

		const {id, timestamp, title, body, author, category, voteScore, deleted, thumbnailURL} = this.props.content;
		const postLink = `/${category}/${id}`;
		
		return (
			<div className="row global__post" data-id={id}>
				<div className="col-sm-4 thumbnail">
					<img src={thumbnailURL}/>
				</div>
				<div className="col-sm-8 caption">
					<h3><a href={postLink}>{title}</a></h3>
					<p>{body}</p>
					<p>Vote: <strong>{voteScore}</strong> |
						Date: <strong>{timestamp}</strong> |
						Category: <strong>{category}</strong>
					</p>
					<div className="btn-group" role="group">
						<button onClick={this.handleUpVote} type="button" className="btn btn-default">Up Vote</button>
						<button onClick={this.handleDownVote} type="button" className="btn btn-default">Down Vote</button>
						<button type="button" className="btn btn-default">Edit</button>
						<button type="button" className="btn btn-default">Delete</button>
					</div>
				</div>
			</div>
		)
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
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);