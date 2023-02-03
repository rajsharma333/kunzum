import React from 'react';
import { useParams, Link } from 'react-router-dom';

function ProductListing() {
	const { catId } = useParams();
	const Image1 =
		'https://images.dailyobjects.com/marche/product-images/1202/all-clove-commute-messenger-medium-images/All-Clove-Commute-Messenger-Small-Vw.png?tr=cm-pad_resize,v-2,w-330,h-406,dpr-2,q-60';
	const Image2 =
		'https://images.dailyobjects.com/marche/product-images/1202/ivory-clove-commute-messenger-large-images/Ivory-Clove-Commute-Messenger-Large-vw.png?tr=cm-pad_resize,v-2,w-330,h-406,dpr-2,q-60';
	const Image3 =
		'https://images.dailyobjects.com/marche/product-images/1202/ivory-navy-commute-messenger-medium-images/Ivory-Navy-Commute-Messenger-Medium.png?tr=cm-pad_resize,v-2,w-330,h-406,dpr-2,q-60';

	return (
		<div className="contentMargin pt-10 text-size-xl">
			<h3>{catId}</h3>
			<div className="">
				<div className="productList flex flexRow">
					<div className="productCard">
						<Link to="/product/prodct1">
							<img alt="product 1" src={Image1} />
						</Link>
						<div className="prdname">Pink Carnation Invite</div>
						<div className="flex flexRow">
							<div>
								<div className="prdprice">Rs. 120</div>
								<div className="prddispatch">Dispatch in 5-7 days</div>
							</div>
							<div className="flexRight">
								<Link className="details" to="/product/product1">
									View Details
								</Link>
							</div>
						</div>
					</div>
					<div className="productCard">
						<Link to="/product/prodct2">
							<img alt="product 1" src={Image2} />
						</Link>
						<div className="prdname">Pink Carnation Invite</div>
						<div className="flex flexRow">
							<div>
								<div className="prdprice">Rs. 120</div>
								<div className="prddispatch">Dispatch in 5-7 days</div>
							</div>
							<div className="flexRight">
								<Link className="details" to="/product/product2">
									View Details
								</Link>
							</div>
						</div>
					</div>
					<div className="productCard">
						<Link to="/product/prodct3">
							<img alt="product 1" src={Image3} />
						</Link>
						<div className="prdname">Pink Carnation Invite</div>
						<div className="flex flexRow">
							<div>
								<div className="prdprice">Rs. 120</div>
								<div className="prddispatch">Dispatch in 5-7 days</div>
							</div>
							<div className="flexRight">
								<Link className="details" to="/product/product3">
									View Details
								</Link>
							</div>
						</div>
					</div>
					<div className="productCard">
						<img alt="product 1" src={Image1} />
						<div className="prdname">Pink Carnation Invite</div>
						<div className="flex flexRow">
							<div>
								<div className="prdprice">Rs. 120</div>
								<div className="prddispatch">Dispatch in 5-7 days</div>
							</div>
							<div className="flexRight">
								<Link className="details" to="/product">
									View Details
								</Link>
							</div>
						</div>
					</div>
					<div className="productCard">
						<img alt="product 1" src={Image2} />
						<div className="prdname">Pink Carnation Invite</div>
						<div className="flex flexRow">
							<div>
								<div className="prdprice">Rs. 120</div>
								<div className="prddispatch">Dispatch in 5-7 days</div>
							</div>
							<div className="flexRight">
								<Link className="details" to="/product">
									View Details
								</Link>
							</div>
						</div>
					</div>
					<div className="productCard">
						<img alt="product 1" src={Image3} />
						<div className="prdname">Pink Carnation Invite</div>
						<div className="flex flexRow">
							<div>
								<div className="prdprice">Rs. 120</div>
								<div className="prddispatch">Dispatch in 5-7 days</div>
							</div>
							<div className="flexRight">
								<Link className="details" to="/product">
									View Details
								</Link>
							</div>
						</div>
					</div>
					<div className="productCard">
						<img alt="product 1" src={Image1} />
						<div className="prdname">Pink Carnation Invite</div>
						<div className="flex flexRow">
							<div>
								<div className="prdprice">Rs. 120</div>
								<div className="prddispatch">Dispatch in 5-7 days</div>
							</div>
							<div className="flexRight">
								<Link className="details" to="/product">
									View Details
								</Link>
							</div>
						</div>
					</div>
					<div className="productCard">
						<img alt="product 1" src={Image2} />
						<div className="prdname">Pink Carnation Invite</div>
						<div className="flex flexRow">
							<div>
								<div className="prdprice">Rs. 120</div>
								<div className="prddispatch">Dispatch in 5-7 days</div>
							</div>
							<div className="flexRight">
								<Link className="details" to="/product">
									View Details
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductListing;
