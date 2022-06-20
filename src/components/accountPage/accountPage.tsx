import React, {useEffect, useState} from "react";
import {userTypeSelector} from "../../hooks/userTypeSelector";
// @ts-ignore
import avatarLoad from '../../img/user-load.png';
import {useActions} from "../../hooks/useActions";
import {useNavigate} from "react-router-dom";
import {
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton
} from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './accountPage.css';
//@ts-ignore
import {ReactComponent as UserLogo} from '../../img/user-round.svg';
//@ts-ignore
import {ReactComponent as Bell} from '../../img/bell.svg';
//@ts-ignore
import {ReactComponent as Note} from '../../img/note-bookmark.svg';
//@ts-ignore
import {ReactComponent as Paper} from '../../img/paper.svg';
//@ts-ignore
import {ReactComponent as Lock} from '../../img/lock-closed-II.svg';
//@ts-ignore
import {ReactComponent as Download} from '../../img/download_user.svg';
//@ts-ignore
import {ReactComponent as Logout} from '../../img/logout.svg';


interface State {
    password: string;
    showPassword: boolean;
}


const AccountPage: React.FC = () => {
    const {user, loading, error, login} = userTypeSelector(state => state.user);
    const {stateUser} = useActions();
    const toHome = useNavigate();
    const [values, setValues] = useState({password: '', showPassword: false,});
    const [valuesDop, setValuesDop] = useState({password: '', showPassword: false,});


    const selected = {
        border: '1px solid #009CB4',
        borderRadius: 5,
        color: '#009CB4',
    }

    const exit = {
        color: '#E0371F',
    }

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [prop]: event.target.value});
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleClickShowPasswordDop = () => {
        setValuesDop({
            ...valuesDop,
            showPassword: !valuesDop.showPassword,
        });
    };

    const handleChangeDop = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValuesDop({...valuesDop, [prop]: event.target.value});
    };

    const handleMouseDownPasswordDop = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    useEffect(() => {
        if (!login) toHome('/');
        stateUser()
    }, [user])

    if (error) {
        toHome('/');
    }

    if (!login) {
        toHome('/');
    }

    return (
        <div className='user_account_container'>
            <h2>Личный кабинет</h2>
            <div className='user_account_info'>
                <div className='user_menu'>
                    <div className='user_menu_button selected' style={selected}>
                        <div className="ico_user">
                            <UserLogo className='ico_min selected_ico'/>
                        </div>
                        Мои данные
                    </div>
                    <div className='user_menu_button'>
                        <div className="ico_user">
                            <Bell className='ico_min'/>
                        </div>
                        Уведомления
                    </div>
                    <div className='user_menu_button'>
                        <div className="ico_user">
                            <Note className='ico_min'/>
                        </div>
                        Реестры
                    </div>
                    <div className='user_menu_button'>
                        <div className="ico_user">
                            <Paper className='ico_min'/>
                        </div>
                        Метаданные
                    </div>
                    <div className='user_menu_button'>
                        <div className="ico_user">
                            <Lock className='ico_min'/>
                        </div>
                        Безопасность
                    </div>
                    <div className='user_menu_button'>
                        <div className="ico_user">
                            <Download className='ico_min'/>
                        </div>
                        Мои загрузки
                    </div>
                    <div className='user_menu_button exit' style={exit}>
                        <div className="ico_user">
                            <Logout className='ico_min ico_exit'/>
                        </div>
                        Выход
                    </div>
                </div>
                <div className="user_main">
                    <div className="foto_header">
                        <div className="avatar">
                            <img src={avatarLoad} alt=""/>
                        </div>
                        <h2>Здравствуй, {user.name}!</h2>
                    </div>
                    <div className="line"></div>
                    <div className="user_main_data">
                        <h3>Основные данные</h3>
                        <div className="inputs">
                            <div>
                                <p>Имя</p>
                                <input type="text" name="" id="" value={user.name.split(' ')[0]}/>
                            </div>
                            <div>
                                <p>Фамилия</p>
                                <input type="text" name="" id="" value={user.name.split(' ')[1]}/>
                            </div>
                            <div>
                                <p>Отчество</p>
                                <input type="text" name="" id="" value={user.name}/>
                            </div>
                            <div>
                                <p>Страна</p>
                                <select name="" id="">
                                    <option value={user.address.city} selected>{user.address.city}</option>
                                </select>
                            </div>
                            <div>
                                <p>Город</p>
                                <select name="" id="">
                                    <option value={user.address.city} selected>{user.address.city}</option>
                                </select>
                            </div>
                            <div>
                                <p>Мобильный телефон</p>
                                <input type="text" name="" id="" value={user.phone}/>
                            </div>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="user_password">
                        <h3>Пароль</h3>
                        <div className="user_password_elements">
                            <div>
                                <p>Новый пароль</p>
                                <FormControl sx={{m: 1, width: 370, backgroundColor: '#F6F6F9'}} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleChange('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {values.showPassword ? <VisibilityOff/> : <Visibility/>}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>
                            </div>
                            <div>
                                <p>Подтверждение пароля</p>
                                <FormControl sx={{m: 1, width: 370, backgroundColor: '#F6F6F9'}} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Подтверждение пароля</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={valuesDop.showPassword ? 'text' : 'password'}
                                        value={valuesDop.password}
                                        onChange={handleChangeDop('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPasswordDop}
                                                    onMouseDown={handleMouseDownPasswordDop}
                                                    edge="end"
                                                >
                                                    {valuesDop.showPassword ? <VisibilityOff/> : <Visibility/>}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>
                            </div>
                        </div>
                    </div>
                    <div className="line"></div>
                    <button className="save">Сохранить</button>
                </div>
            </div>
        </div>
    )
}

export default AccountPage