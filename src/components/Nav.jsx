import React from 'react';
import logo from '../assets/logo.svg';

const Nav = () => (
	<nav
		style={{
			background: '#fff',
			width: '100vw',
			height: '3rem',
			display: 'flex',
			alignItems: 'center',
			padding: '0 2rem'
		}}>
		<img
			style={{
				background: 'black',
				width: '10rem'
			}}
			src={logo}
			alt="logo"
		/>
	</nav>
);

export default Nav;
