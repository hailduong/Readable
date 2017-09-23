import React from "react";

const Sort = (props) => {

	const sortByDate = () => {
		props.sort("-timestamp")
	};

	const sortByScore = () => {
		props.sort("-voteScore")
	};


	return (
		<div className="sort text-right awe-check">
			<span className="m-r-sm">Sort by:</span>
			<div className="radio-inline radio radio-success">
				<input defaultChecked={true} type="radio" onClick={sortByDate} name="sortPosts" id="sort-by-date" value="date"/>
				<label htmlFor="sort-by-date">Date</label>
			</div>
			<div className="radio-inline radio radio-success">
				<input type="radio" onClick={sortByScore} name="sortPosts" id="sort-by-score" value="score"/>
				<label htmlFor="sort-by-score">Score</label>
			</div>
		</div>
	)

};

export default Sort;