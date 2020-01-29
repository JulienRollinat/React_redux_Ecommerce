import React from 'react';
import { connect } from 'react-redux';
import { getAllProducts } from '../api/typecode';
import {addProduct} from '../actions'

class Home extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			products: [],
			min: 0,
			max: 15
		}
	}
	
	componentDidMount(){
		getAllProducts()
			.then((res)=>{
				this.setState({ products: res.data })
			})
	}
	
	displayProducts() {
		return this.state.products.map((product, index)=>{
			if(index >= this.state.min && index < this.state.max) {
				return (
					<article key={index} className="product-item">
							<img src={product.url} className="productImage"/>
							<h3>{product.title.substr(0, 20)}...</h3>
							<div
							className="add-basket"
							 onClick={()=>{
								this.onClickAddProduct(product)
							 }}
							>
								<i className="fas fa-plus-circle"></i>
							</div>
					</article>
				)
			}
		})
	}
	
	onClickNext(e){
		e.preventDefault();
		if (this.state.max < this.state.products.length -16) {
			this.setState({min: this.state.min += 15, max: this.state.max += 15});
		}
	}
	
	onClickPrev(e){
		e.preventDefault();
		if (this.state.min >= 15) {
			this.setState({min: this.state.min -= 15, max: this.state.max -= 15});
		}
	}
	
	onClickAddProduct(newProduct) {
		newProduct.quantity = 1;
		let products = this.props.product.basket
		let sameIndex = products.findIndex((product) => product.id === newProduct.id)
		if (sameIndex === -1) {
			products = [...products, newProduct];
			//products.push(newProduct);
		} else {
			products[sameIndex].quantity += newProduct.quantity
		}
		this.props.addProduct(products);
	}

	render(){
		return (
			<div>
				<h1>Home Page</h1>
				{this.displayProducts()}
				<button
					onClick={(e)=>{
						this.onClickPrev(e);
					}}
				>
					prev
				</button>
				<button
					onClick={(e)=>{
						this.onClickNext(e);
					}}
				>
					next
				</button>
			</div>
		)
	}
}

const mapStateToProps = (store) => {
	return {
		product: store.basket
	}
}

const mapDispatchToProps = {
	addProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)