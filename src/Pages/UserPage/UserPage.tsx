import React, { FC, useEffect, useState } from "react";
import './UserPage.scss'
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useAction";
import Menu from '../../components/Menu/Menu';
import { useParams } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

type UserPageParams = {
    id: string
}

const UserPage:FC = () => {
    const {user, loading, error} = useTypedSelector( state => state.user);
    const {fetchUsers} = useActions()
    const params = useParams<UserPageParams>()

    useEffect( () => {
        fetchUsers(params.id!)
    },[])
    console.log(error)


    if (loading) {
        return  (
            <div className="userWaiter">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>    
            </div>
            
        )
    };

    if (error) {
        return (
            <div className="userWaiter">
                <Alert variant={'danger'}>{error}</Alert>
            </div>
        )
    };

    return (
        <div className="userPage">
            <div className="container userPage__container">
                <div>открыта страница юзера {user.id}</div>
                <div>{user.name}</div>
            </div>
            <Menu /> 
        </div>
    )
}
export default UserPage;