import { actionTypes } from '../constants';
import data from '../webdev_data.json';

const product = (state = null, action) => {
	switch (action.type) {
		case actionTypes.GET_PRODUCT:
			return { ...data[0] };
		default:
			return state;
	}
};

export default product;
