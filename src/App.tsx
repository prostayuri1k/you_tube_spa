import React, {useEffect} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "./hooks/hooks";
import {login} from "./redux/slices/loginSlice";


function App() {

    const {isAuthenticated} = useAppSelector(state => state.login);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const token = localStorage.getItem("token");

    useEffect(() => {
        if(token) {
            dispatch(login())
        }
    }, [dispatch, token]);

    useEffect(() => {
        isAuthenticated ? navigate('/search') : navigate('/authorization');
    }, [isAuthenticated, navigate]);

    return (
        <div className="bg-customGray min-h-screen">
            <Outlet/>
        </div>
    );
}

export default App;
