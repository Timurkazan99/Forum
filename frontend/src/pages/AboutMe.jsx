import React from 'react';
import {Card, Container, Image} from "react-bootstrap";
import '../styles/aboutme.scss';
import photo from "../assets/img/photo.jpeg";

const AboutMe = () => {
  return (
    <Container className='aboutme-container mt-2'>
      <Card bg='secondary' text='white'>
        <Card.Header>
          <Card.Title>Обо мне</Card.Title>
        </Card.Header>
        <Card.Body>

          <div className='aboutme-wrapper'>
            <Image src={photo} />
            <div>
              <p>
                Меня зовут Тимур, мне 24 года. Учился на программиста в КИТ (Колледж информационных технологий), работал тестировщиком, закончил онлайн курсы hexlet.
                Немного о себе, молодой и веселый человек, легко нахожу общий язык и приживаюсь в коллективе.
              </p>
              <span><a href='https://github.com/Timurkazan99/'>Мой гитхаб</a> с небольшим портфолио:</span>
              <ul>
                <li>Чат
                  <ul>
                    <li><a href='https://github.com/Timurkazan99/frontend-project-lvl4'>Репозиторий</a></li>
                    <li><a href='http://ovz1.j66826829.wmekm.vps.myjino.ru/chat/'>Пример</a></li>
                  </ul>
                </li>
                <li>Трекер боя для ДнД
                  <ul>
                    <li><a href='https://github.com/Timurkazan99/DnD-toolkit'>Репозиторий</a></li>
                    <li><a href='http://ovz1.j66826829.wmekm.vps.myjino.ru/dnd-toolkit/'>Пример</a></li>
                  </ul>
                </li>
                <li>Интерактивное расписание
                  <ul>
                    <li><a href='https://github.com/Timurkazan99/schedule'>Репозиторий</a></li>
                    <li><a href='http://ovz1.j66826829.wmekm.vps.myjino.ru/schedule/'>Пример</a></li>
                  </ul>
                </li>
                <li>Форум
                  <ul>
                    <li><a href='https://github.com/Timurkazan99/Forum'>Репозиторий</a></li>
                    <li><a href='https://forum-frontend-hxcih0zkg-timurkazan99.vercel.app/'>Пример</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AboutMe;