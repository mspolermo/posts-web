import React, { FC } from "react";
import './Header.scss';

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { menuFalse, menuTrue } from "../../store/reducers/menuReducer";

import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from "react-router-dom";

const Header:FC = () => {
    const {menuStatus} = useTypedSelector(state => state.menu);
    const dispatch = useDispatch();
    const navigate = useNavigate();

	function closing() {
        dispatch(menuFalse())
    };
    function goToPage(link:string) {
        navigate(link);
        dispatch(menuFalse())
    }; 
    function menuToogle (){
        switch (menuStatus){
            case false:
                dispatch(menuTrue())
                break;
            case true:
                dispatch(menuFalse())
                break;
        }
    };

    return (
        <div>

            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">
                    <div className="burger-btn" onClick={menuToogle}>
                        <span className="burger-btn__line"/>
                    </div>
                </Navbar.Brand>
            </Navbar>

            <Offcanvas show={menuStatus} onHide={closing}>
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <ul>
                            <li>
                                <p className="header__point"
                                    onClick={() => goToPage('/posts-web/')}
                                >
                                    Главня страница
                                </p>
                            </li>
                            <li>
                                <p className="header__point"
                                    onClick={() => goToPage('/posts-web/about/')}
                                >
                                    Обо мне
                                </p> 
                            </li>    
                        </ul>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
    );
};

export default Header;
