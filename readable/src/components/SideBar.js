import React from "react";
import {NavLink} from "react-router-dom"

function SideBar() {
	return (
		<div className="global__sidebar">
			<h3 className="m-t-none m-b-lg">Categories</h3>
			<ol className="categories">
				<li><NavLink to="/react">React</NavLink></li>
				<li><NavLink to="/redux">Redux</NavLink></li>
				<li><NavLink to="/udacity">Udacity</NavLink></li>
			</ol>
		</div>
	)
}

export default SideBar;