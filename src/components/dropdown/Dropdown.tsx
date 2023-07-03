import React, { useEffect, useRef, useState } from "react";
import ClassNames from "classnames";
import PropTypes from "prop-types";
import "./Dropdown.scss";

const DropdownMenu = ({ menus, placeholder }: { menus: string[]; placeholder: string }) => {
    const useDetectClose = (initialState: boolean) => {
        const [isOpen, setIsOpen] = useState(initialState);
        const ref = useRef(null);

        const removeHandler = () => {
            setIsOpen(!isOpen);
        };

        useEffect(() => {
            const onClick = (e) => {
                if (ref.current !== null && !ref.current.contains(e.target)) {
                    setIsOpen(!isOpen);
                }
            };

            if (isOpen) {
                window.addEventListener("click", onClick);
            }

            return () => {
                window.removeEventListener("click", onClick);
            };
        }, [isOpen]);

        return [isOpen, ref, removeHandler];
    };

    const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false);

    return (
        <div className="dropdownMenu">
            <div className="dropdownMenuContainer">
                <div className="dropdownMenuContainer__button" onClick={myPageHandler} ref={myPageRef}>
                    {placeholder}
                </div>
                <div className={ClassNames("dropdownMenuContainer__menu", { isDropped: myPageIsOpen })}>
                    <ul>
                        {menus.map((item) => (
                            <li>
                                <a href="#">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

DropdownMenu.propTypes = {
    placeholder: PropTypes.string.isRequired,
    menus: PropTypes.array.isRequired,
};

export default DropdownMenu;
