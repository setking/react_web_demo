import * as userType from '../action-type'

export const getUserInfo = (userInfo) => (dispatch) => {
    return dispatch(setUserInfo(userInfo))
}

export const setUserInfo = (userInfo) => {
    return {
        type: userType.USER_SET_USER_INFO,
        ...userInfo,
    }
}