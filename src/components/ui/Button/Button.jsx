import React from 'react';
import "./button.css"

const Button = (props) => {
    return (
        <button {...props} className={props.className + " ui-button " + (props.variant === "outlined" ? "ui-button-outlined" : "ui-button-contained")}>
            {props.children}
        </button>
    );
};

export default Button;