import React from "react";
import Option from "./Option";

//Stateless functional component
//sped up because it doesn't have to manage lifecycle
const Header = (props) => (
    <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
);

Header.defaultProps = {
    title: 'Indecision App'
};

export default Header;