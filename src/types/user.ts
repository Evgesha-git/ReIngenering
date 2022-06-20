
export interface UserState{
    user: {
        name: any;
        address: {
            city: string;
        };
    },
    loading: boolean,
    error: null | string,
    login: boolean
}

export enum UserActionTypes {
    FETCH_USER = "FETCH_USER",
    FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
    FETCH_USER_ERROR = "FETCH_USER_ERROR",
    USER_LOGIN = 'USER_LOGIN'
}

interface FetchUserAction {
    type: UserActionTypes.FETCH_USER;
}

interface FetchUserSuccessAction {
    type: UserActionTypes.FETCH_USER_SUCCESS;
    payload: {
        name: any
        address: {
            city: string;
        }
    };

}

interface FetchUserErrorAction {
    type: UserActionTypes.FETCH_USER_ERROR;
    payload: string;
}

interface UserLoginAction{
    type: UserActionTypes.USER_LOGIN;
    // payload: {name: any};
}

export type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction | UserLoginAction;


