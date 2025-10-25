import React, {useState} from 'react';
import arrowUp from "../../../assets/arrowUp.svg";
import "./select.css"

const Select = ({title, className, onChange, value, data}) => {

    const [isOpen, setOpen] = useState(false)

    const handleChoose = (chosen) => {
        setOpen(false);
        onChange(chosen)
    }

    const handleOpen = () => {
        setOpen(!isOpen)
    }

    return (
        <div className={"ui-select " + (className ? className : "")}>
            <div onClick={handleOpen} className={"ui-select__btn-wrapper"}>
                <p>{!value || !data ? title : value?.name}</p>
                <img className={"ui-select__img" + (isOpen ? "--active" : "")} width={"16px"} height={"16px"}
                     src={arrowUp} alt={"arrowUp"}/>
            </div>
            {
                isOpen && (
                    <div className={"ui-select__content"}>
                        {
                            data && data.map((elem, index) => (
                                    <div key={elem?.id} onClick={
                                        e => handleChoose(elem?.id)
                                    } className={(elem?.id === value?.id ? "ui-select__item--active" : "") + " ui-select__item"}>
                                        {elem?.name}
                                    </div>
                                )
                            )
                        }
                    </div>
                )
            }
        </div>
    );
};

export default Select;