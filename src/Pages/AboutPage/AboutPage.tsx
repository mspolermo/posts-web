import React, { FC, useEffect } from "react";
import './AboutPage.scss'
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useAction";
import Menu from '../../components/Menu/Menu';

const AboutPage:FC = () => {

    return (
        <div className="aboutPage">
            <h1>Моя страница</h1>
            <Menu /> 
        </div>
    )
}
export default AboutPage;