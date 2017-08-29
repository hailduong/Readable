import React from "react";
import SideBar from "./SideBar";

class PostPage extends React.Component {

	render() {
		
		const {id, timestamp, title, body, author, category, voteScore, deleted, thumbnailURL} = this.props.post[0];

		return (
			<div className="container post-page">
				<div className="col-sm-8">
					<div className="global__main-content">
						<div className="post">
							<h3>{title}</h3>
							<div className="thumbnail">
								<img className="img-responsive" src={thumbnailURL} alt=""/>
							</div>
							<p>Category: <strong>{category}</strong> |
								Author: <strong>{author}</strong> |
								VoteScore: <strong>{voteScore}</strong> |
								Time: <strong>{timestamp}</strong>
							</p>
							<p>{body}</p>
						</div>
					</div>
				</div>
				<div className="col-sm-4">
					<SideBar/>
				</div>
			</div>
		)
	}

	componentDidMount() {
		const postIDToGet = this.props.match.params.post;
		this.props.getSinglePost(postIDToGet);
	}

}

export default PostPage;