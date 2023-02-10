import React from 'react';

function Cart() {
	const Image1 =
		'https://images.dailyobjects.com/marche/product-images/1202/all-clove-commute-messenger-medium-images/All-Clove-Commute-Messenger-Small-Vw.png?tr=cm-pad_resize,v-2,w-330,h-406,dpr-2,q-60';

	return (
		<div className="contentMargin cartTable">
			<div className="cartCardWrapper flex flexRow">
				<div className="thumbnail">Product</div>
				<div className="price">Unit Price</div>
				<div className="quantity">Quantity</div>
				<div className="total">Total Amount</div>
			</div>
			<div className="cartCardWrapper flex flexRow">
				<div className="thumbnail">
					<img width="150px" alt="product" src={Image1} />
				</div>
				<div className="price">Rs. 200</div>
				<div className="quantity">100</div>
				<div className="total">Rs. 7000</div>
			</div>
		</div>
	);
}

export default Cart;
