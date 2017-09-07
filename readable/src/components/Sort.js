import React from "react";

function Sort() {
	return (
		<div className="sort text-right">
			<span className="m-r-sm">Sort by:</span>
			<label className="radio-inline">
				<input type="radio" name="sortPosts" id="sort-by-date" value="date"/>
				<span>Date</span>
			</label>
			<label className="radio-inline">
				<input type="radio" name="sortPosts" id="sort-by-score" value="score"/>
				<span>Score</span>
			</label>
		</div>
	)
}

export default Sort;