import React, { FC } from "react";
import './Header.scss'
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { menuFalse, menuTrue } from "../../store/reducers/menuReducer";

const Header:FC = () => {
    const {menuStatus} = useTypedSelector(state => state.menu);
    const dispatch = useDispatch();
    
    function menuToogle (){
        switch (menuStatus){
            case false:
                dispatch(menuTrue())
                break;
            case true:
                dispatch(menuFalse())
                break;
        }
    }
    return (
        <nav>
            <div className="burger-btn" onClick={menuToogle}>
                <span className="burger-btn__line"/>
            </div>
      </nav>
    )
}

export default Header;
