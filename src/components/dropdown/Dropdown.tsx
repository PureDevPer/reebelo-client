import React, { useEffect, useRef, useState } from "react";
import ClassNames from "classnames";
import PropTypes from "prop-types";
import "./Dropdown.scss";
import { QTY } from "../../constants/order";

const useDetectClose = (initialState: boolean) => {
    const [isOpen, setIsOpen] = useState(initialState);
    const ref = useRef(null);

    const removeHandler = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const onClick = (e) => {
            if (ref.current !== null && ref.current !== e.target) {
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

const DropdownMenu = ({ menus, placeholder }: { menus: string[]; placeholder: string }) => {
    const [dropdownPlaceholder, setDropdownPlaceholder] = useState<string>(placeholder);
    const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false);

    const handlePlaceholder = (e: React.MouseEvent<HTMLElement>, item: string) => {
        e.preventDefault();
        setDropdownPlaceholder(`${QTY}${item}`);
    };

    useEffect(() => {
        if (!myPageIsOpen) {
            setDropdownPlaceholder(dropdownPlaceholder);
        }
    }, [dropdownPlaceholder, myPageIsOpen]);

    return (
        <div className="dropdownMenu">
            <div className="dropdownMenuContainer">
                <div className="dropdownMenuContainer__placeholder" onClick={myPageHandler} ref={myPageRef}>
                    {dropdownPlaceholder}
                </div>
                <div className={ClassNames("dropdownMenuContainer__menu", { isDropped: myPageIsOpen })}>
                    <ul>
                        {menus.map((item) => (
                            <li
                                className="dropdownMenuContainer__menu-item"
                                onClick={(e) => handlePlaceholder(e, item)}>
                                {item}
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
