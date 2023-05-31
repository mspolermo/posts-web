import React, { FC } from "react";
import './MainPage.scss'
import PostsList from '../../components/PostsList/PostsList';
import Menu from '../../components/Menu/Menu';

const MainPage:FC = () => {
    return (
        <div className="mainPage">
            <div className="container mainPage__container">
                <PostsList />
            </div>
            <Menu /> 
        </div>
    )
}

export default MainPage;