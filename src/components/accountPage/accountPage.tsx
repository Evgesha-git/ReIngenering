import React from "react";
import {userTypeSelector} from "../../hooks/userTypeSelector";
// @ts-ignore
import avatarLoad from '../../img/user-load.png';

const AccountPage: React.FC = () => {
    const {user, loading} = userTypeSelector(state => state.user);

    return (
        <div className='user_account_container'>
            <h2>Личный кабинет</h2>
            <div className='user_account_info'>
                <div className='user_menu'>
                    <div className='selected'>
                        <div className="ico_user"></div>
                        Мои данные
                    </div>
                    <div>
                        <div className="ico_user"></div>
                        Уведомления
                    </div>
                    <div>
                        <div className="ico_user"></div>
                        Реестры
                    </div>
                    <div>
                        <div className="ico_user"></div>
                        Метаданные
                    </div>
                    <div>
                        <div className="ico_user"></div>
                        Безопасность
                    </div>
                    <div>
                        <div className="ico_user"></div>
                        Мои загрузки
                    </div>
                    <div className='exit'>
                        <div className="ico_user"></div>
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
                                <input type="text" name="" id="" value={user.name.split('')[0]}/>
                            </div>
                            <div>
                                <p>Фамилия</p>
                                <input type="text" name="" id="" value={user.name.split('')[1]}/>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountPage