import React from "react";
import {Link} from "react-router-dom";
//@ts-ignore
import logo from "../../img/logo.svg";
import './footer.css';

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="footer_main">
                <div className="logo_main_footer">
                    <div className="logo">
                        <Link to='/'>
                            <img src={logo} alt="Logo"/>
                        </Link>
                    </div>
                    <div className='footer_info_main'>Открытое акционерное общество
                        «Реестр ПО» начало практическую
                        деятельность с&nbsp;1&nbsp;марта 2014&nbsp;г</div>
                    <div className="dev_footer">
                        <h2>Разработчик</h2>
                        <p>ОАО&nbsp;«Агентство сервисизации и&nbsp;реинжиниринга»</p>
                        <p>Минск, улица Клары Цеткин, 24</p>
                    </div>
                </div>
                <div className="footer_info">
                    <h2>Информация</h2>
                    <p>Реестры</p>
                    <p>Новости</p>
                    <p>Документы</p>
                    <p>Вопросы</p>
                </div>
                <div className="foot_tex_support">
                    <h2>Техническая поддержка</h2>
                    <p>Ежедневно с 8.00 до 19.00,
                        за исключением выходных (суббота, воскресенье) и праздничных дней.</p>
                    <div className="line_footer"></div>
                    <a href='tel:+375 25 111 22 33'>+375 25 111 22 33 </a>
                    <a href='tel:+375 29 222 44 55'>+375 29 222 44 55</a>
                    <a href="mailto:ReestrPOsupport@mail.ru">ReestrPOsupport@mail.ru</a>
                </div>
                <div className="footer_contacts">
                    <h2>Контакты</h2>
                    <a href="tel:+375 33 112 22 45">+375 33 112 22 45</a>
                    <a href="tel:+375 29 222 44 88">+375 29 222 44 88</a>
                    <a href="mailto:ReesrtPO@mail.ru">ReesrtPO@mail.ru</a>
                    <p>220004 г. Минск, ул. Карла Маркса, 38</p>
                    <a href="/" className="support">Связаться с поддержкой</a>
                </div>
            </div>
            <div className="line_footer"></div>
            <p className='footer_bottom'>© Copyright 2022&nbsp;— ОАО&nbsp;«РеестрПО». Все&nbsp;права защищены.</p>
        </footer>
    )
}

export default Footer