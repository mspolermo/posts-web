import React, { FC, useState } from "react";
import './MainPage.scss'
import PostsList from '../../components/PostsList/PostsList';
import Menu from '../../components/Menu/Menu';
import Form from 'react-bootstrap/Form';

const MainPage:FC = () => {
    const [sortVariant, setSortVariant] = useState('userId')
    function chooseVariat (value:string) {
        setSortVariant(value)
    }
    
    console.log(sortVariant)
    return (
        <div className="mainPage">
            <div className="container mainPage__container">
                <Form.Select aria-label="Default select example" onChange={(e) => chooseVariat(e.target.value)}>
                    <option value="userId">По userId</option>
                    <option value="title">По заголовку</option>
                </Form.Select>
                <PostsList typeOfSorting={sortVariant}/>
            </div>
            <Menu /> 
        </div>
    )
}

export default MainPage;