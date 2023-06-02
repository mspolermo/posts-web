import React, { FC, useEffect, RefObject } from "react";
import './UserInfo.scss';
import { UserInfoProps } from "../../types/componentsTypes";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useAction";

import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const UserInfo:FC<UserInfoProps> = ({userId, hiddenBlock}) => {
    const {user, loading, error} = useTypedSelector( state => state.user);
    const {fetchUsers} = useActions();
    const imgLink = 'https://www.freeiconspng.com/uploads/person-outline-icon-png-person-outline-icon-png-person-17.png'

    useEffect( () => {
        fetchUsers(userId)
    },[])

    function postBlockToogle () {
        hiddenBlock?.current?.classList.toggle('userPage__postListBlock_active')
    };


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
        <div className="userInfo">
            <div className="userInfo__top">
                <Card className="userInfo__card userInfo__card_left">
                    <Card.Img src={imgLink} />
                    <Card.Body>
                        <Card.Title>{user.name}</Card.Title>
                        <Card.Text>
                            UserID: 000{user.id}
                            <br/>
                            {user.email}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="userInfo__card userInfo__card_right">
                    <Card.Header>Информация о пользователе</Card.Header>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>
                                Company: "{user.company.name}" 
                                <br/>
                                {user.company.catchPhrase} : {user.company.bs}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Address: {user.address.city}, {user.address.street}, {user.address.suite}
                            </ListGroup.Item>
                            <ListGroup.Item>Phone number: {user.phone}</ListGroup.Item>
                            <ListGroup.Item>Web-site: {user.website}</ListGroup.Item>
                        </ListGroup>
                </Card>
            </div>
            <Button className="userInfo__btn" onClick={postBlockToogle}>Посты пользователя</Button>
                
        </div>
    );
};

export default UserInfo;
