import React from "react";

const Navbar = function() {
	return (
		<nav className="navbar navbar-default">
			<div className="container-fluid">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<a className="navbar-brand">Brand</a>
				</div>
				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul className="nav navbar-nav">
						<li className="active"><a >Link
							<span className="sr-only">(current)</span>
						</a></li>
						<li><a >Link</a></li>
						<li className="dropdown">
							<a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown
								<span className="caret"></span>
							</a>
							<ul className="dropdown-menu">
								<li><a >Action</a></li>
								<li><a >Another action</a></li>
								<li><a >Something else here</a></li>
								<li role="separator" className="divider"></li>
								<li><a >Separated link</a></li>
								<li role="separator" className="divider"></li>
								<li><a >One more separated link</a></li>
							</ul>
						</li>
					</ul>
					<form className="navbar-form navbar-left">
						<div className="form-group">
							<input type="text" className="form-control" placeholder="Search"/>
						</div>
						<button type="submit" className="btn btn-default">Submit</button>
					</form>
					<ul className="nav navbar-nav navbar-right">
						<li><a >Link</a></li>
						<li className="dropdown">
							<a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown
								<span className="caret"></span>
							</a>
							<ul className="dropdown-menu">
								<li><a >Action</a></li>
								<li><a >Another action</a></li>
								<li><a >Something else here</a></li>
								<li role="separator" className="divider"></li>
								<li><a >Separated link</a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
};

export default Navbar;