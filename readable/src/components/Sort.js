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
			<div className="sort text-right awe-check">
				<span className="m-r-sm">Sort by:</span>
				<div className="radio-inline radio radio-success">
					<input defaultChecked={true} type="radio" onClick={this.sortByDate} name="sortPosts" id="sort-by-date" value="date"/>
					<label htmlFor="sort-by-date">Date</label>
				</div>
				<div className="radio-inline radio radio-success">
					<input type="radio" onClick={this.sortByScore} name="sortPosts" id="sort-by-score" value="score"/>
					<label htmlFor="sort-by-score">Score</label>
				</div>
			</div>
		)
	}
}

export default Sort;