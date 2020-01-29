import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';

class Nav extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		
		return (
			<React.Fragment>
				<nav id="menu">
					<Link className="nav-title" to="/">Home</Link>
					<Link className="nav-title" to="/basket">Panier</Link>
					{this.props.product.basket.length > 0 && <span>{this.props.product.basket.length}</span>}
				</nav>	
			</React.Fragment>	
		)
	}
}

const mapStateToProps = (store) => {
  return {
  	product: store.basket
  }
}


export default connect(mapStateToProps)(Nav)