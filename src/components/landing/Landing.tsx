import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./Landing.scss";
import { POPULAR_PHONES, categories, IS_LOADING } from "../../constants/home";
import Card from "../card/Card";
import axios from "axios";
import { PRODUCT } from "../../api/api";
import { convertProductDataToCardData, getLastProductTitle } from "../../utils/utils";
import { addLastProduct } from "../../actions/ActionTypes";
import { BottomScrollListener } from "react-bottom-scroll-listener";
import { Product } from "../../interfaces/interfaces";
import Helmet from "react-helmet";
import ClassNames from "classnames";

const Landing: React.FC = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState<Boolean>(true);
    const [productData, setProductData] = useState<Product[] | []>([]);
    const [lastPhoneProduct, setLastPhoneProduct] = useState<string>("");

    useEffect(() => {
        if (productData.length === 0 && lastPhoneProduct.length === 0) {
            axios
                .get(PRODUCT)
                .then((res) => {
                    if (res?.data?.length > 0) {
                        setProductData(res.data);
                        setLastPhoneProduct(getLastProductTitle(res.data));
                        dispatch(addLastProduct(getLastProductTitle(res.data)));
                    }
                    setIsLoading(false);
                })
                .catch((err) => {
                    console.error(err);
                    setIsLoading(false);
                });
        }
    }, [dispatch, lastPhoneProduct, productData.length]);

    const handleOnBottom = async () => {
        const result = await axios.get(`${PRODUCT}?lastProductTitle=${lastPhoneProduct}`);
        if (result.data.length > 0) {
            const addedProductData: Product[] = [...productData, ...result.data];
            setProductData(addedProductData);
            setLastPhoneProduct(getLastProductTitle(result.data));
        }
    };

    return (
        <div className="landing">
            <Helmet>
                <title>Home | Wooseok Kim</title>
            </Helmet>
            <div className="categories">
                <Card items={categories} />
            </div>
            <BottomScrollListener onBottom={handleOnBottom}>
                <div className="phones">
                    <div className="categories">
                        <span className={ClassNames("categories__phone", { isLoading })}>
                            {isLoading ? IS_LOADING : POPULAR_PHONES}
                        </span>
                        {!isLoading && <Card items={convertProductDataToCardData(productData)} />}
                    </div>
                </div>
            </BottomScrollListener>
        </div>
    );
};

export default Landing;
