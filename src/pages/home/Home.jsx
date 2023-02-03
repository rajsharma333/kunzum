import React from 'react';

function Home() {
	const Image1 =
		'https://images.dailyobjects.com/marche/product-images/1202/all-clove-commute-messenger-medium-images/All-Clove-Commute-Messenger-Small-Vw.png?tr=cm-pad_resize,v-2,w-330,h-406,dpr-2,q-60';
	return (
		<div className="homeBanner">
			<div>Flaunt your style statement</div>
			<img alt="banner" width="500" src={Image1} />
		</div>
	);
}

export default Home;
