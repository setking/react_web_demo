import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "../views/login"
import {connect} from "react-redux";
import Layout from "../views/layout"

function Router(props) {
    const {role} = props
    const Main = () => {
        return role ? <Layout/> : <Login/>
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

function NotFound() {
    return (
        <div>
            找不到匹配的路由
        </div>
    )
}

export default connect((state) => state.user)(Router);