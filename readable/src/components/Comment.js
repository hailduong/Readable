import React from "react";

class Comment extends React.Component {

	handleUpVoteComment = () => {
		const commentID = this.props.comment.id;
		const postID = this.props.postID;
		this.props.actions.upVoteComment(commentID, postID);
	};

	handleDownVoteComment = () => {
		const commentID = this.props.comment.id;
		const postID = this.props.postID;
		this.props.actions.downVoteComment(commentID, postID)
	};

	handleDeleteComment = () => {
		const commentID = this.props.comment.id;
		const postID = this.props.postID;
		this.props.actions.deleteComment(commentID, postID)
	};

	render() {

		const commentPlaceHolderImage = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNWU2Yjc4NmYzMyB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1ZTZiNzg2ZjMzIj48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMy40Njg3NSIgeT0iMzYuNSI+NjR4NjQ8L3RleHQ+PC9nPjwvZz48L3N2Zz4=";
		const {author, body, deleted, id, parentDeleted, parentID, timestamp, voteScore} = this.props.comment;

		return (
			<li className="media m-b-lg">
				<div className="media-left">
					<a href="#">
						<img className="media-object" src={commentPlaceHolderImage}/>
					</a>
				</div>
				<div className="media-body">
					<h4 className="media-heading">{author}</h4>
					<div>{body}</div>
					<div>Votes: {voteScore}</div>
				</div>
				<div className="media-actions m-t">
					<div className="btn-group btn-group-sm m-r-sm">
						<button onClick={this.handleUpVoteComment} type="button" className="btn btn-default">Up Vote</button>
						<button onClick={this.handleDownVoteComment} type="button" className="btn btn-default">Down Vote</button>
					</div>
					<div className="btn-group btn-group-sm">
						<button type="button" className="btn btn-default">Edit</button>
						<button onClick={this.handleDeleteComment} type="button" className="btn btn-default">Delete</button>
						<button type="button" className="btn btn-default">Add New</button>
					</div>
				</div>
			</li>
		)
	}
}

export default Comment;