import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Card.scss";

interface card {
    imgUrl: string;
    name: string;
}

const Card = ({ items }: { items: card[] }) => {
    return (
        <div className="items">
            {items.map((item: card, idx: number) => (
                <Link className="item" key={idx} to={`/order/${item.name}`}>
                    <img alt={item?.name} src={item?.imgUrl} />
                    <span>{item?.name}</span>
                </Link>
            ))}
        </div>
    );
};

Card.propTypes = {
    items: PropTypes.shape({
        imgUrl: PropTypes.string,
        name: PropTypes.string.isRequired,
    }).isRequired,
};

export default Card;
