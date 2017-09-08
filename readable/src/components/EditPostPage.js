import React from "react";
import PostForm from "./PostForm";
import serialize from "form-serialize"

class EditPostPage extends React.Component {

	handleFormSubmit = (event) => {
		event.preventDefault();
		const formObject = serialize(event.target, {hash: true});
		const title = formObject.postTitle;
		const body = formObject.postContent;
		const postID = this.props.match.params.postID;
		this.props.editPost({id: postID, title, body})
	};

	render() {

		const postID = this.props.match.params.postID;
		const thisPostObject = this.props.posts.filter((post) => post.id === postID)[0];

		return (
			<div className="container">
				<div className="col-sm-12">
					<h1>Edit Post</h1>
					<PostForm post={thisPostObject} 
							  postID={postID}
							  handleFormSubmit={this.handleFormSubmit}
							  getSinglePost={this.props.getSinglePost}
					/>
				</div>
			</div>
		)
	}
}

export default EditPostPage;