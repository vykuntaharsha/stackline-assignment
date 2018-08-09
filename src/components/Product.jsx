import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProduct } from '../actions';
import ProductSideBar from './ProductSideBar';
import ProductSalesGraph from './ProductSalesGraph';

class Product extends Component {
	componentDidMount() {
		this.props.getProduct();
	}

	render() {
		const { product } = this.props;
		if (!product) return <main>Loading...</main>;
		return (
			<main
				style={{
					margin: '3rem 0',
					padding: '0 2rem',
					display: 'flex',
					justifyContent: 'space-around'
				}}>
				<ProductSideBar product={product} />
				<div>
					<ProductSalesGraph salesData={product.sales} />
				</div>
			</main>
		);
	}
}
const mapStateToProps = ({ product }) => ({ product });

const mapDispatchToProps = dispatch => {
	return {
		getProduct: () => {
			dispatch(getProduct());
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Product);
