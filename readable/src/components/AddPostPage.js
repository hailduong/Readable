import React from "react";
import PostForm from "./PostForm";
import serialize from "form-serialize"

class AddPostPage extends React.Component {

	handleFormSubmit = (event) => {
		event.preventDefault();
		const formObject = serialize(event.target, {hash: true});
		const postObject = {
			...formObject,
			id: Date.now(),
			timestamp: Date.now(),

		};

		this.props.addNewPost(postObject)
	};

	render() {
		return (
			<div className="container">
				<div className="col-sm-12">
					<h1>Add a new post</h1>
					<PostForm handleFormSubmit={this.handleFormSubmit}/>
				</div>
			</div>
		)
	}
}

export default AddPostPage;