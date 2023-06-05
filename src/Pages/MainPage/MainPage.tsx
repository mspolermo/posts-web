import React, { FC, useState } from "react";
import './MainPage.scss';
import PostsList from '../../components/PostsList/PostsList';
import Form from 'react-bootstrap/Form';

const MainPage:FC = () => {
    const [sortVariant, setSortVariant] = useState('userId');
    const [searchQuerry, setSearchQuerry] = useState<string>('');
    
    function variantUpdate(variant: string) {
        setSortVariant(variant)
    };

    return (
        <div className="mainPage">
            <div className="container mainPage__container">

                <h2 className="mainPage__heading">Поиск</h2>
                
                <Form.Control
                    type="search"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                    onChange={(e) => setSearchQuerry(e.target.value)}
                    className="mainPage__search"
                />

                {(searchQuerry =='') && <div className="mainPage__sortingBlock">

                    <h4 className="mainPage__heading mainPage__heading_small">Сортировка</h4>
                    
                    <Form.Select aria-label="Default select example" 
                                onChange={(e) => setSortVariant(e.target.value)}
                                className="mainPage__select"
                    >
                        <option value="userId">По userId</option>
                        <option value="title">По заголовку</option>
                    </Form.Select>

                 </div>
                }

                <PostsList typeOfSorting={sortVariant} searchQuerry={searchQuerry} setTypeOfSorting={variantUpdate}/>
            
            </div>
        </div>
    );
};

export default MainPage;