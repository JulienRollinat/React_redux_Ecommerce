import {ADD_PRODUCT} from '../actions/actions-types';


const initialState = {
	basket: []
}

export default function BasketReducer(state = initialState, action) {


    switch(action.type) {
		case ADD_PRODUCT:
			return {
				...state,
				basket: action.payload
			}
		
		
		/*
		Si je veux juste faire passer un produit et gérer dans le reducer
		let product = actions.payload;
			
			return {
				...state,
				
				basket: [...basket, product]
				
			}*/
	
		default: 
			return state;
	}
}