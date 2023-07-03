import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { PRODUCT } from "../../api/api";
import { Product } from "../../interfaces/interfaces";
import "./Order.scss";
import { IS_LOADING } from "../../constants/home";
import { IS_NOT_AVAILABLE, QTY, STOCK } from "../../constants/order";
import ClassNames from "classnames";
import DropdownMenu from "../dropdown/Dropdown";

const Order: React.FC = () => {
    const { name }: { name: string } = useParams();
    const [isLoading, setIsLoading] = useState<Boolean>(true);
    const [hasProduct, setHasProduct] = useState<Boolean>(true);
    const [currProduct, setCurrProduct] = useState<Product[] | []>([]);

    useEffect(() => {
        if (currProduct.length === 0) {
            axios
                .get(`${PRODUCT}?title=${name}`)
                .then((res) => {
                    if (res?.data?.length > 0) {
                        setCurrProduct(res.data);
                        setIsLoading(false);
                    } else {
                        setHasProduct(false);
                    }
                })
                .catch((err) => {
                    setIsLoading(false);
                    console.error(err);
                });
        }
    }, [currProduct, name]);

    const getProductQuantityMenuItems = (qty: number) => {
        const maxQty = qty > 5 ? 5 : qty;
        const menus = [];
        for (let i = 0; i < maxQty; i++) {
            menus.push((i + 1).toString());
        }
        return menus;
    };

    return (
        <div className="orderContainer">
            {isLoading && <p>{hasProduct ? IS_LOADING : `${name} ${IS_NOT_AVAILABLE}`}</p>}
            {!isLoading && (
                <>
                    <div className="orderContainer__border"></div>
                    <div className="orderContainer__image">
                        <img alt={currProduct[0].title} src={currProduct[0]?.imgUrl || ""} />
                    </div>
                    <div className="orderContainer__product">
                        <div className="orderContainer__product-header">
                            <div className="title">{currProduct[0].title.split("_").join(" ").toUpperCase()}</div>
                            <div className="price">${currProduct[0].price}</div>
                        </div>
                        <div
                            className={ClassNames("orderContainer__product-stock", {
                                inStock: currProduct[0]?.quantity > 0,
                                soldOut: currProduct[0]?.quantity <= 0,
                            })}>
                            {currProduct[0]?.quantity > 0 ? STOCK.IN_STOCK : STOCK.SOLD_OUT}
                        </div>
                        {currProduct[0]?.quantity > 0 && (
                            <>
                                <DropdownMenu
                                    placeholder={`${QTY}1`}
                                    menus={getProductQuantityMenuItems(currProduct[0].quantity)}
                                />
                                <button className="orderContainer__product-cart">Add to Cart</button>
                                <button className="orderContainer__product-buyNow">Buy Now</button>
                            </>
                        )}
                    </div>
                    <div className="orderContainer__border"></div>
                </>
            )}
        </div>
    );
};

export default Order;
