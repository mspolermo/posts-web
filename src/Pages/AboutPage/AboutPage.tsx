import React, { FC, useEffect } from "react";
import './AboutPage.scss'

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const photo = require('../../static/Photo Medvedev Alexander.jpg'); 
const CV = require("../../static/CV Medvedev Alexander.pdf");

const AboutPage:FC = () => {
    return (
        <div className="aboutPage">
            <div className="container aboutPage__container">
                <h1 className="aboutPage__heading">Моя страница</h1>
                <div className="aboutPage__top">
                    <Card className="aboutPage__card aboutPage__card_left">
                        <Card.Img className="aboutPage__img" src={photo}/>
                        <Card.Body>
                            <Card.Title>Медведев Александр</Card.Title>
                            <Card.Text>mspolermo@gmail.com</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="aboutPage__card aboutPage__card_right">
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
                                    - Саунд-дизайн
                                    <br/>
                                    - Новые технологии
                                    <br/>
                                    - Консольный гейминг
                                    <br/>
                                    - Домашние животные
                                    <br/>
                                    - Путешествия 
                                </ListGroup.Item>
                            </ListGroup>
                    </Card>
                </div>
                <Button className="aboutPage__btn">
                    <a href={CV} className="aboutPage__link" download='CV-Frontend Medvedev Alexander .pdf'>Скачать резюме</a>
                    </Button>
            </div>
        </div>
    )
}
export default AboutPage;