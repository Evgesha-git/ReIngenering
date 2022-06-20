import {UserAction, UserActionTypes, UserState} from "../../types/user";


const initialState: UserState = {
    user: {
        name: '',
        address: {
            city: ''
        }
    },
    loading: true,
    error: null,
    login: false,
};

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type){
        case UserActionTypes.FETCH_USER:
            return {loading: true, error: null, user: {name: '', address: {city: ''}}, login: false};
        case UserActionTypes.FETCH_USER_SUCCESS:
            return {loading: false, error: null, user: action.payload, login: true};
        case UserActionTypes.FETCH_USER_ERROR:
            return {loading: false, error: action.payload, user: {name: '', address: {city: ''}}, login: false};
        case UserActionTypes.USER_LOGIN:
            return state
        default:
            return state;
    }
}