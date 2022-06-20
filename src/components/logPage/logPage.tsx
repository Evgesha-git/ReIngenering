import React, {useRef} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useActions} from "../../hooks/useActions";
import {userTypeSelector} from "../../hooks/userTypeSelector";
import './logPage.css';
//@ts-ignore
import back from '../../img/back.svg'

const LogPage:React.FC = () => {
    const login = useRef(null);
    const password = useRef(null);
    const {loginUser} = useActions()
    const {user, loading, error} = userTypeSelector(state => state.user)
    const userAccount = useNavigate();

    const loginHandler = (e: any) => {
        e.preventDefault();
        // @ts-ignore
        let log = login.current.value;
        // @ts-ignore
        let pass = password.current.value

        loginUser(log, pass);
        if (!error){
            userAccount('/account', {replace: true})
        }
    }

    return (
        <div className='log_page_container'>
            <div className='log_page_link'>
                <Link to='/'>
                    <i className='arrow' style={{backgroundImage: `url(${back})`}}></i>
                    Главная
                </Link>
            </div>
            <form className='log_page_form' action="" onSubmit={e => loginHandler(e)}>
                <h2>Авторизация</h2>
                <div className='lag_main'>
                    <p>Имя</p>
                    <input ref={login} type='text' name="log" id="log" placeholder='Введите имя'/>
                    <p>Пароль</p>
                    <input ref={password} type="password" name="pas" id="pas" placeholder='Введите пароль'/>
                    <div className='log_check'>
                        <input type="checkbox" name="ch" id="ch"/>
                        <label htmlFor="ch">Запомнить меня на этом компьютере</label>
                    </div>
                    <button className='log_submit' type="submit">Вход</button>
                    <p>Забыли свой пароль?</p>
                </div>
                <div className='log_dop'>
                    <div className='log_dop_btn'>Авторизация с использованием ЕС ИФЮЛ</div>
                    <div className='log_dop_btn'>Авторизация с использованием МСИ</div>
                </div>
                <p>У вас нет аккаунта? <br/>
                    <a href="">Нажмите сюда чтобы создать</a></p>
            </form>
        </div>
    )
}

export default LogPage