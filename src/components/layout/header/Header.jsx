import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../common/logo/Logo';
import CartIcon from '../../../assets/images/shopping-cart-icon.jpeg';

function Header() {
	const isLoggedIn = false;
	return (
		<header className="contentMargin">
			<Logo width="140" />
			<nav>
				<NavLink to="/home">Home</NavLink>
				<NavLink to="/category/Invitations">Invitations</NavLink>
				<NavLink to="/category/Digital Inivtations">
					Digital Invitations
				</NavLink>
				<NavLink to="/category/Favors">Favors</NavLink>
				<NavLink to="/category/accessories">Accessories</NavLink>
				<NavLink to="/category/weddingapp">Wedding App</NavLink>
				<NavLink to={isLoggedIn ? '/myaccount' : '/product/myproduct'}>
					{isLoggedIn ? 'My Account' : 'Login'}
				</NavLink>
			</nav>
			<div className="flexRight flexColumn flex">
				<img alt="cart" src={CartIcon} width="40px" />
			</div>
		</header>
	);
}

export default Header;
