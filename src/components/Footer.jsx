import React from 'react';

const Footer = (props) => {
	return (
		<footer className="footer">
		  <div className="container-fluid">
		    <div className="row">
				<div className="col-lg-12 col-md-12">
					<div className="col-lg-6 col-md-6 text-muted">
						{props.leftContent}
					</div>
					<div className="col-lg-6 col-md-6 text-muted text-right">
						{props.rightContent}
					</div>
				</div>
			</div>
		  </div>
		</footer>
	)
}

export default Footer;