import { Product } from "../interfaces/interfaces";

export const convertProductDataToCardData = (products: Product[]) =>
    products.map((product: Product) => ({ imgUrl: product.imgUrl, name: product.title }));

export const getLastProductTitle = (products: Product[]) => products[products.length - 1].title;

export const convertProductTitle = (title: string) => title.split("_").join(" ").toUpperCase();
