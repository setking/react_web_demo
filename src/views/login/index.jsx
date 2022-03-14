import React from "react";
import {useNavigate} from 'react-router-dom'
import { connect } from "react-redux";
import {getUserInfo} from '../../store/actions'

function Login(props) {
    // let Navigator = useNavigate();
    const { getUserInfo } = props;
    const Layout = () => {
        // Navigator('/layout')
        let userinfo = {
            name: '游客',
            role: 'admin',
            avatar: '',
        }
        getUserInfo(userinfo)
    }
    return (
        <div>
            login
            <button onClick={Layout}>toLayout</button>
        </div>
    )
}
export default connect((state) => state.user, { getUserInfo})(
    Login
)
