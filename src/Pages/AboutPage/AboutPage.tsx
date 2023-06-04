import React, { FC, useEffect } from "react";
import './AboutPage.scss'

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const AboutPage:FC = () => {
    return (
        <div className="aboutPage">
            <div className="container userInfo aboutPage__container">
                <h1 className="aboutPage__heading">Моя страница</h1>
                <div className="userInfo__top">
                    <Card className="userInfo__card userInfo__card_left">
                        <Card.Img className="aboutPage__img"/>
                        <Card.Body>
                            <Card.Title>Медведев Александр</Card.Title>
                            <Card.Text>mspolermo@gmail.com</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="userInfo__card userInfo__card_right">
                        <Card.Header>Информация о пользователе</Card.Header>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Phone number: +7-982-698-54-68</ListGroup.Item>
                                <ListGroup.Item>Web-site: mspolermo.github.io/posts-web/</ListGroup.Item>
                                <ListGroup.Item>
                                    Address: Россия, Свердловская область, Екатеринбург
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Увлечения: 
                                    <br/>
                                    - Путешествия 
                                    <br/>
                                    - Саунд-дизайн
                                    <br/>
                                    - Консольный гейминг
                                    <br/>
                                    - Домашние животные
                                    <br/>
                                    - Новые технологии
                                </ListGroup.Item>
                            </ListGroup>
                    </Card>
                </div>
                <Button className="userInfo__btn">Скачать резюме</Button>
            </div>
        </div>
    )
}
export default AboutPage;