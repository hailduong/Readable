import React from "react";
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
					<form onSubmit={this.handleFormSubmit}>
						<div className="form-group">
							<label htmlFor="postTitle">Title</label>
							<input type="text" name="postTitle" className="form-control" id="postTitle" placeholder="Post Title"/>
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputPassword1">Content</label>
							<textarea name="postContent" id="postContent" rows="10" className="form-control"></textarea>
						</div>
						<div className="form-group">
							<label htmlFor="postAuthor">Category</label>
							<select name="postCategory" id="postCategory" className="form-control">
								<option selected value="react">React</option>
								<option value="redux">Redux</option>
								<option value="udacity">Udacity</option>
							</select>
						</div>
						<div className="form-group">
							<label htmlFor="postAuthor">Author</label>
							<input type="text" name="postAuthor" className="form-control" id="postAuthor" placeholder="Post Author"/>
						</div>
						<button type="submit" className="btn btn-primary">Add post</button>
					</form>
				</div>
			</div>
		)
	}
}

export default AddPostPage;