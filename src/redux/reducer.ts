import { ADD_LAST_PRODUCT } from "../actions/ActionTypes";

interface StateReducer {
    lastProduct: string;
}

interface ProductInitialReducer {
    product: StateReducer;
}

interface Action {
    type: string;
    lastProduct: string;
}

const initialState: ProductInitialReducer = {
    product: {
        lastProduct: "",
    },
};

export const productReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ADD_LAST_PRODUCT:
            return {
                ...state,
                product: action.lastProduct,
            };
        default:
            return state;
    }
};

export const getLastProduct = (state: ProductInitialReducer) => state.product.lastProduct;
