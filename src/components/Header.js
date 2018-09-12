import React from "react";
import Option from "./Option";

//Stateless functional component
//sped up because it doesn't have to manage lifecycle
const Header = (props) => (
    <div className="header">
        <h1 className="header__title">{props.title}</h1>
        {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
    </div>
);

Header.defaultProps = {
    title: 'Indecision App'
};

export default Header;