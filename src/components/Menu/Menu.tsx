import React, { FC } from "react";
import './Menu.scss';

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { menuFalse } from "../../store/reducers/menuReducer";

const Menu:FC = () => {
    const {menuStatus} = useTypedSelector(state => state.menu)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function goToPage(link:string) {
        navigate(link);
        dispatch(menuFalse())
    };

    return(
        <div className={menuStatus ?"menu menu__active" : "menu"}>
            <div className="menu__blur" />
            <div className="menu__content">
                <div className="menu__header">Бургер меню</div>
                <ul>
                    <li>
                        <p className="menu__text"
                            onClick={() => goToPage('/posts-web/')}
                        >Главня страница
                        </p>
                    </li>
                    <li>
                       <p className="menu__text"
                            onClick={() => goToPage('/posts-web/about/')}
                        >Обо мне
                        </p> 
                    </li>    
                </ul>
            </div>
        </div>
    );
};

export default Menu
