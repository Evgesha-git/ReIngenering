import React, {useEffect, useRef, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useActions} from "../../hooks/useActions";
import {userTypeSelector} from "../../hooks/userTypeSelector";
import './logPage.css';
//@ts-ignore
import back from '../../img/back.svg'
import TaskAltRounded from '@mui/icons-material/TaskAltRounded';


const LogPage:React.FC = () => {
    const loginRef = useRef(null);
    const password = useRef(null);
    const {loginUser} = useActions()
    const {user, loading, error, login} = userTypeSelector(state => state.user)
    const userAccount = useNavigate();
    const {stateUser} = useActions()
    const [errorInputLogin, setErrorInputLogin] = useState({error: false, good: false});
    const [errorInputPassword, setErrorInputPassword] = useState({error: false, good: false});


    useEffect(() => {
        stateUser();
        if (login){
            userAccount('/account', {replace: true})
        }
    }, [user, login, error, errorInputPassword, errorInputLogin])

    const inputHandlerValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
        const reg = /[a-zA-Z0-9]{3,}/g;
        let val: string = e.target.value;
        let bul: boolean = reg.test(val);
        if (val === '') setErrorInputLogin({error:false, good: false});
        setErrorInputLogin({error:!bul, good: bul});
    }

    const inputHandlerValidationPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const reg = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/g;
        let val: string = e.target.value;
        let bul: boolean = reg.test(val);
        if (val === '') setErrorInputPassword({error:false, good: false});
        setErrorInputPassword({error:!bul, good: bul});
    }

    const loginHandler = async (e: any) => {
        e.preventDefault();
        // @ts-ignore
        let log = loginRef.current.value;
        // @ts-ignore
        let pass = password.current.value

        await loginUser(log, pass);

    }

    return (
        <div className='log_page_container'>
            <div className='log_page_link'>
                <Link to='/'>
                    <i className='arrow' style={{backgroundImage: `url(${back})`}}></i>
                    Главная
                </Link>
            </div>
            <form className='log_page_form' action="" onSubmit={loginHandler}>
                <h2>Авторизация</h2>
                <div className='log_main'>
                    <div className="inputs_log">
                        {errorInputLogin.error ? <p className='label_inputs_error'>Неправильный логин</p> : ''}
                        <div className='inputs_log_input'>
                            <input 
                                ref={loginRef} 
                                onInput={inputHandlerValidation} 
                                style={errorInputLogin.good ? {border: '1px solid #00B347'} : {}} 
                                className={errorInputLogin.error ? 'error_input log_inputs' : 'log_inputs'} 
                                type='text' 
                                name="log" 
                                id="log" 
                                placeholder='Введите имя'
                            />
                            {errorInputLogin.good ? 
                            <div className='good'>
                                <TaskAltRounded sx={{fill: '#00B247'}}/>
                            </div> : null}
                        
                        </div>
                        <p className={errorInputLogin.error ? 'error_text label_inputs' : 'label_inputs'}>Имя</p>
                    </div>
                    <div className="inputs_log">
                        {errorInputPassword.error ? <p className='label_inputs_error'>Неправильный пароль</p> : ''}
                        <div className='inputs_log_input'>
                            <input 
                                ref={password} 
                                style={errorInputPassword.good ? {border: '1px solid #00B347', color: '#00B347'} : {}} 
                                onInput={inputHandlerValidationPassword} 
                                className={errorInputPassword.error ? 'error_input log_inputs' : 'log_inputs'} 
                                type="password" 
                                name="pas" 
                                id="pas" 
                                placeholder='Введите пароль'
                            />
                            {errorInputPassword.good ? <div className='good'>
                                <TaskAltRounded sx={{fill: '#00B247'}}/>
                            </div> : null}
                        </div>
                        <p className={errorInputPassword.error ? 'error_text label_inputs' : 'label_inputs'}>Пароль</p>
                    </div>
                    <div className='log_check'>
                        <input type="checkbox" name="ch" id="ch"/>
                        <label htmlFor="ch">Запомнить меня на этом компьютере</label>
                    </div>
                    <button className='log_submit' type="submit">Вход</button>
                    <p className='pass_re'>Забыли свой пароль?</p>
                </div>
                <div className='log_dop'>
                    <div className='log_dop_btn'>Авторизация с использованием ЕС ИФЮЛ</div>
                    <div className='log_dop_btn'>Авторизация с использованием МСИ</div>
                </div>
                <p className='acc_create'>У вас нет аккаунта? <br/>
                    <a href="">Нажмите сюда чтобы создать</a></p>
            </form>
        </div>
    )
}

export default LogPage