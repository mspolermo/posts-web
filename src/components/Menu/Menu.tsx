import React, { FC } from "react";
import './Menu.scss'
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Menu:FC = () => {
    const {menuStatus} = useTypedSelector(state => state.menu)

    return(
        <div className={menuStatus ?"menu menu__active" : "menu"}>
            <div className="menu__blur" />
            <div className="menu__content">
                <div className="menu__header">Бургер меню</div>
                <ul>
                    <li>
                        <p className="menu__text">Главня страница</p>
                        <p className="menu__text">Обо мне</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu
