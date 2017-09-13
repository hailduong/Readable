import React from "react";


class Sort extends React.Component {

	sortByDate = () => {
		this.props.sort("-timestamp")
	};

	sortByScore = () => {
		this.props.sort("-voteScore")
	};

	render() {
		return (
			<div className="sort text-right">
				<span className="m-r-sm">Sort by:</span>
				<label className="radio-inline">
					<input defaultChecked={true} type="radio" onClick={this.sortByDate} name="sortPosts" id="sort-by-date" value="date"/>
					<span>Date</span>
				</label>
				<label className="radio-inline">
					<input type="radio" onClick={this.sortByScore} name="sortPosts" id="sort-by-score" value="score"/>
					<span>Score</span>
				</label>
			</div>
		)
	}
}

export default Sort;