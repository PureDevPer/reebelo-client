import React from "react";
import "./Footer.scss";

const Footer: React.FC = () => {
    return <div className="footer">&copy; {new Date().getFullYear()} Wooseok Kim</div>;
};

export default Footer;
