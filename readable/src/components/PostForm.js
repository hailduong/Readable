import React from "react";

class PostForm extends React.Component {
	
	render() {
		let title, body;

		if (!!this.props.post) {
			title = this.props.post.title;
			body = this.props.post.body;
		} else {
			if (!!this.props.getSinglePost) {
				this.props.getSinglePost(this.props.postID);
			}
		}
		
		return (
			<form onSubmit={this.props.handleFormSubmit}>
				<div className="form-group">
					<label htmlFor="postTitle">Title</label>
					<input type="text" defaultValue={title} name="postTitle" className="form-control" id="postTitle" placeholder="Post Title"/>
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputPassword1">Content</label>
					<textarea defaultValue={body} name="postContent" id="postContent" rows="10" className="form-control"></textarea>
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
				<button type="submit" className="btn btn-primary">Submit Changes</button>
			</form>
		)
	}
}

export default PostForm