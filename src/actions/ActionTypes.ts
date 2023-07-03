// Product

export const ADD_LAST_PRODUCT: string = "ADD_LAST_PRODUCT";

export const addLastProduct = (lastProduct: string) => {
    return {
        type: ADD_LAST_PRODUCT,
        product: { lastProduct },
    };
};
