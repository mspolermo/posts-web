import React, { FC, useState } from "react";
import './MainPage.scss'
import PostsList from '../../components/PostsList/PostsList';
import Menu from '../../components/Menu/Menu';
import Form from 'react-bootstrap/Form';

const MainPage:FC = () => {
    const [sortVariant, setSortVariant] = useState('userId');
    const [searchQuerry, setSearchQuerry] = useState<string>('')
    
    return (
        <div className="mainPage">
            <div className="container mainPage__container">
                <Form.Control
                    type="search"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                    onChange={(e) => setSearchQuerry(e.target.value)}
                />
                <Form.Select aria-label="Default select example" onChange={(e) => setSortVariant(e.target.value)}>
                    <option value="userId">По userId</option>
                    <option value="title">По заголовку</option>
                </Form.Select>
                <PostsList typeOfSorting={sortVariant} searchQuerry={searchQuerry}/>
            </div>
            <Menu /> 
        </div>
    )
}

export default MainPage;