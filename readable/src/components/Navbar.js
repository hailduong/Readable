import React from "react";
import {Link} from "react-router-dom";

const Navbar = function() {
	return (
		<nav className="navbar navbar-default">
			<div className="container-fluid">
				<div className="navbar-header">
					<Link  className="navbar-brand" to="/">Readable</Link>
				</div>
				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul className="nav navbar-nav navbar-right">
						<li><Link to="/add-new-post">Add New Post</Link></li>
					</ul>
				</div>
			</div>
		</nav>
	)
};

export default Navbar;