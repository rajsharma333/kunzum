import React from 'react';
import Home from '../pages/home/Home';
import ProductDetails from '../pages/productDetails/ProductDetails';
import ProductListing from '../pages/productListing/ProductListing';
import Cart from '../pages/cart/Cart';
import Login from '../pages/login/Login';
import Account from '../pages/account/Account';
import NotFoundPage from '../pages/notFoundPage/NotFoundPage';

const routes = [
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/home',
		element: <Home />,
	},
	{
		path: '/category/:catId',
		element: <ProductListing />,
	},
	{
		path: '/product/:id',
		element: <ProductDetails />,
	},
	{
		path: '/cart',
		element: <Cart />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/account',
		element: <Account />,
	},
	{
		path: '*',
		element: <NotFoundPage />,
	},
];

export default routes;
