import React from "react";
import SideBar from "./SideBar";
import Sort from "./Sort";
import Post from "./Post";


class ListPage extends React.Component {

	componentWillReceiveProps(nextProps) {
		if (!!this.props.match) {

			const currentMatchedCategory = this.props.match.params.category;
			const nextMathcedCategory = nextProps.match.params.category;

			if (currentMatchedCategory !== nextMathcedCategory) {
				this.props.getCategoryPosts(nextMathcedCategory)
			}
		}

	}

	render() {
		const postsNode = Array.isArray(this.props.posts)
			&& this.props.posts.map((post, index) => <Post key={index} content={post}/>);

		return (
			<div className="container list-page">
				<div className="col-sm-8">
					<Sort/>
					<div className="global__main-content">
						{postsNode}
					</div>
				</div>
				<div className="col-sm-4">
					<SideBar/>
				</div>
			</div>
		)
	}

	componentDidMount() {
		// Fetch posts after the component is mounted
		const currentCategory = !!this.props.match && this.props.match.params.category;
		!!currentCategory
			? this.props.getCategoryPosts(currentCategory)
			: this.props.getAllPosts();

	}

}


export default ListPage;
