import {UserAction, UserActionTypes} from "../../types/user";
import {Dispatch} from "redux";
import axios from "axios";

const loginDefault: string = 'login';
const passwordDefault: string = 'password'

export const stateUser = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        dispatch({type: UserActionTypes.USER_LOGIN});
    }
}

export const loginUser = (login: any, password: any) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USER})
            if (login !== loginDefault) throw new Error();
            if (password !== passwordDefault) throw new Error();
            const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
            dispatch({type:UserActionTypes.FETCH_USER_SUCCESS, payload: response.data});
        }catch (e) {
            dispatch({type: UserActionTypes.FETCH_USER_ERROR,
            payload: 'Произошла ошибка'})
        }
    }
}