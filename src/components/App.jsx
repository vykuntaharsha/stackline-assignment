import React, { Component } from 'react';
import Nav from './Nav';
import Product from './Product';

class App extends Component {
	render() {
		return (
			<div
				className="App"
				style={{
					background: '#fcfcfc',
					minHeight: '100vh',
					maxWidht: '100vw',
					overflowX: 'hidden'
				}}>
				<Nav />
				<Product />
			</div>
		);
	}
}

export default App;
