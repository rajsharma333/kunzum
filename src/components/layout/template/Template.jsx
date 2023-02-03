import React from 'react';
import Header from '../header/Header';
import Content from '../content/Content';
import Footer from '../footer/Footer';

function Template() {
	return (
		<div className="wrapper">
			<Header />
			<Content />
			<Footer />
		</div>
	);
}

export default Template;
