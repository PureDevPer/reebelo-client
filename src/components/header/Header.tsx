import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, withRouter } from "react-router-dom";
import "./Header.scss";

export default withRouter(() => (
    <header className="header">
        <Link className="header__items" to="/">
            <FontAwesomeIcon icon={faHouse} />
            <span>Home</span>
        </Link>
        {/* <Link className="header__items" to="/order">
            <FontAwesomeIcon icon={faUser} />
            <span>Order</span>
        </Link> */}
    </header>
));
