import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import './header.css';
// @ts-ignore
import logo from "../../img/logo.svg";
import {Badge} from "@mui/material";
// @ts-ignore
import badge from '../../img/badge.svg';
import {userTypeSelector} from "../../hooks/userTypeSelector";
import Profile from "../profile/profile";
import {useActions} from "../../hooks/useActions";
import {Link, Outlet } from 'react-router-dom';

const Header: React.FC = () => {
    const {loginUser, stateUser} = useActions();

    // useEffect(() => {
    //     loginUser('login', 'password');
    // })

    return (
        <>
            <header className='header'>

                <div className="forms">
                    <div className="logo">
                        <Link to='/'>
                            <img src={logo} alt="Logo"/>
                        </Link>
                    </div>
                    <form action="" className="search">
                        <input type="text" name="s" id="search" placeholder='Поиск'/>
                        <button type="submit"></button>
                    </form>
                </div>

                <div className="user_container">
                    <form action="" className="date">
                        {/*
                        Честно пытался реализовать календарик, но не получилось, временя не хватило
                    */}
                        {/*<input type="date" name="" id="date_input"/> */}
                        <label htmlFor='date_input'  className="date_button"></label>
                    </form>
                    <div className='badge_container'>
                        <Badge
                            badgeContent={4}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            color='secondary'
                        >
                            <img src={badge} alt="badge"/>
                        </Badge>
                    </div>
                    <div className="line"></div>
                    <Profile/>
                </div>

            </header>
            <Outlet/>
        </>
    )
}

export default Header;