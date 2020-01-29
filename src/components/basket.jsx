import React from 'react';
import { connect } from 'react-redux';
import { getAllProducts } from '../api/typecode';
import {addProduct} from '../actions'

class Basket extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			products: []			
		}
    }
    
    displayBasket() {
		return this.props.product.basket.map((product, index)=>{
            return (
					<li key={index} className="remove-basket"
                    onClick={()=>{
                       this.onClickRemoveProduct(product)
                    }} >
					    {product.title}
                        <div
							
						>								
							</div>	
					</li>
                )
                       			
		})
    }
    
    onClickRemoveProduct(newProduct) {
        console.log("fdfs");
		let products = this.props.product.basket
		let sameIndex = products.findIndex((product) => product.id === newProduct.id)
		if (sameIndex === -1) {			
		} else {
            products = products.slice(0,sameIndex);            
		}
		this.props.addProduct(products);
	}

	render(){        
		return (
			<div>
                <h1> Contenu du panier :</h1>
				<div style={{color:"blue", fontFamily:"cursive", fontSize:"20px"}}>
					<ul>
					    {this.props.product.basket.length > 0 ? this.displayBasket() : "Rien pour le moment ..."}
					</ul>                    
				</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Basket)