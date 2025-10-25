import React from 'react';
import "./input.css"

const Input = ({title, className, inputProp = null, type="text", multiple = false, placeholder, name,  full = false, onChange, value}) => {
    return (
        <div className={(full ? "ui-input-wrapper--full " : "") + "ui-input-wrapper " +
            (className ? className : "")}>
            <div className={"ui-input-label"}>
                {title}
            </div>
            {!multiple && !inputProp && <input type={type} className={"ui-input "}
                                 name={name}
                                 placeholder={placeholder}
                                 onChange={onChange}
                                 value={value}
            />}
            {
                !inputProp && multiple && <textarea className={"ui-input--multi "}
                                      name={name}
                                      placeholder={placeholder}
                                      onChange={onChange}
                                      value={value}
                />
            }
            {
                inputProp !== null && (inputProp)
            }
        </div>
    );
};


export default Input;