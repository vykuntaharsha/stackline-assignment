import React from 'react';
import './product-sidebar.css';

const ProductSideBar = ({ product }) => {
	return (
		<aside className="product">
			<div className="product-heading">
				<img src={product.image} alt="product" />
				<h3>{product.title}</h3>
				<p>{product.subtitle}</p>
			</div>
			<div className="product-tags">
				{product.tags
					? product.tags.map((tag, index) => <a key={index}>{tag}</a>)
					: null}
			</div>
			<div className="product-nav">
				<a>OVERVIEW</a>
				<a>SALES</a>
			</div>
		</aside>
	);
};

export default ProductSideBar;
