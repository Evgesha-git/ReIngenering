import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
// @ts-ignore
import avatar from '../../img/user-round.svg';
// @ts-ignore
import avatarLoad from '../../img/user-load.png';
import {userTypeSelector} from "../../hooks/userTypeSelector";
// import {fetchUser} from "../../store/action-creators/user";
import './profile.css';
import {useActions} from "../../hooks/useActions";
import {useNavigate} from "react-router-dom";

const Profile: React.FC = () => {
    const {user, loading, error, login} = userTypeSelector(state => state.user);
    const {stateUser} = useActions();
    const toLogin = useNavigate();

    useEffect(() => {
        stateUser();
    }, [user])

    console.log(user);
    console.log(loading);

    const loginHandler = () => {
        toLogin('/login')
    }

    const userHandler = () => {
        toLogin('/account')
    }

    return (
        <div className="profile">
            <div className="avatar">
                <img src={!login ? avatar : avatarLoad} alt=""/>
            </div>
            {!login ?
                <span onClick={() => loginHandler()}>Вход в акаунт</span>:
                <span onClick={() => userHandler()}>{user.name}</span>
            }
            <div className="user_intarface"></div>
        </div>
    )
}

export default Profile