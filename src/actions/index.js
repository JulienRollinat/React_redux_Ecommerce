import {ADD_PRODUCT} from './actions-types';

export function addProduct(products) {
    return function(dispatch) {
        dispatch({
				type: ADD_PRODUCT,
				payload: products
			});
        
    }
}