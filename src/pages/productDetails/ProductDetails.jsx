import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
	const { id } = useParams();
	return <div className="contentMargin pt-10 text-size-xl">{id}</div>;
}

export default ProductDetails;
