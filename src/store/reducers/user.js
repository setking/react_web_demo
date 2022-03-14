import * as userType from  '../action-type'
const initUserInfo = {
    name: '',
    role: '',
    avatar: '',

}
export default function user(state = initUserInfo, action) {
    switch (action.type) {
        case userType.USER_SET_USER_INFO:
            return {
                ...state,
                name: action.name,
                role: action.role,
                avatar: action.avatar,
            }
        case userType.USER_RESET_USER:
            return {};
        default:
            return state;
    }
}