import React from 'react';
import { Link } from 'react-router-dom';

function ProductDetails() {
	const Image1 =
		'https://images.dailyobjects.com/marche/product-images/1202/all-clove-commute-messenger-medium-images/All-Clove-Commute-Messenger-Small-Vw.png?tr=cm-pad_resize,v-2,w-330,h-406,dpr-2,q-60';
	const Image2 =
		'https://images.dailyobjects.com/marche/product-images/1202/ivory-clove-commute-messenger-large-images/Ivory-Clove-Commute-Messenger-Large-vw.png?tr=cm-pad_resize,v-2,w-330,h-406,dpr-2,q-60';
	const Image3 =
		'https://images.dailyobjects.com/marche/product-images/1202/ivory-navy-commute-messenger-medium-images/Ivory-Navy-Commute-Messenger-Medium.png?tr=cm-pad_resize,v-2,w-330,h-406,dpr-2,q-60';

	return (
		<div className="contentMargin pt-10 text-size-xl">
			<div className="flex flexRow prdtopwrapper">
				<section className="flex flexColumn">
					<img width="400px" alt="product" src={Image1} />
					<div className="flex flexRow thumbnails">
						<img width="149px" alt="product" src={Image1} />
						<img width="149px" alt="product" src={Image2} />
						<img width="149px" alt="product" src={Image3} />
						<img width="149px" alt="product" src={Image1} />
					</div>
				</section>
				<div className="prdname">
					Pink Carnation Invite
					<br />
					<p className="prddescription">
						The Rustic Antler Monogram Wedding Program is an excellent addition
						to any wedding with an outdoorsy theme. With a rustic font, this
						program has the bride and groom’s initials at the very top of the
						front page. Underneath this monogram, a large set of antlers with
						purple flowers and green leaves appear.
					</p>
					<div className="prdprice">Rs. 120</div>
					<Link className="buynowbtn" to="/cart">
						Add to Cart
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ProductDetails;
