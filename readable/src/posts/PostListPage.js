import React from "react";
import SideBar from "../global/SideBar";
import Sort from "../global/Sort";
import Post from "./PostItem";
import sortBy from "sort-by";


class ListPage extends React.Component {

	constructor() {
		super();

		this.state = {
			sort: "-timestamp"
		}
	}

	componentWillReceiveProps(nextProps) {

		// Set All-Posts / Category-Posts
		if (!!this.props.match) {

			const currentMatchedCategory = this.props.match.params.category;
			const nextMathcedCategory = nextProps.match.params.category;

			if (currentMatchedCategory !== nextMathcedCategory) {
				this.props.getCategoryPosts(nextMathcedCategory)
			}
		}

	}

	sort = (sortOrder) => {
		this.setState({
			sort: sortOrder
		});
	};

	render() {

		const sortOrder = this.state.sort;


		const postsNode = (() => {

			if (Array.isArray(this.props.posts)) {
				const sortedPosts = this.props.posts.sort(sortBy(sortOrder));

				return sortedPosts.map((post, index) => {

					// Only return posts that are not deleted
					if (!post.deleted) {
						return <Post key={post.id} content={post}/>
					}

				});
			}

			return null;
		})();


		const totalNumberOfPost = this.props.posts.filter((post) => !post.deleted).length;

		return (
			<div className="container list-page">
				<div className="row">
					<div className="col-sm-8">
						<div className="row m-b-lg">
							<div className="col-sm-6">Total posts: <strong>{totalNumberOfPost}</strong></div>
							<div className="col-sm-6"><Sort sort={this.sort}/></div>
						</div>
						<div className="global__main-content">
							{postsNode}
						</div>
					</div>
					<div className="col-sm-1"></div>
					<div className="col-sm-3">
						<SideBar/>
					</div>
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
