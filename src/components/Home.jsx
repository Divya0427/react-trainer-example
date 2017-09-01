import React from 'react';

import Header from './Header';
import Container from './Container';
import Footer from './Footer';

const heading = "React Trainer Example";
const footerData = {
	"leftContent": "© 2017 React.js™",
	"rightContent": "Terms  of use | Privacy statement"
}

const Home = () => {
	return (
		<div className="container-fluid">
			<Header heading={heading}/>
			<Container/>
			<Footer {...footerData} />
			{/*<Header heading={heading}/>
			*/}
		</div>
		)
}

export default Home;
