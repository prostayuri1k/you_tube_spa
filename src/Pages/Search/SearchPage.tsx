import React, {FC} from 'react';
import logo from '../../image/Search/logo.svg';
import {useAppDispatch} from "../../hooks/hooks";
import {logout} from "../../redux/slices/loginSlice";
import {NavLink, Outlet, useMatch} from "react-router-dom";


const SearchPage: FC = () => {

    const dispatch = useAppDispatch();

    const matchDefault = useMatch('/search/default');
    const matchFavorites = useMatch('/search/favorites');

    const styleHeaderLinks = 'h-full px-5 text-headerText flex flex-col justify-center ';

    return (
        <div className="h-screen flex flex-col">
            <header className='border-b border-customBlack bg-white h-20'>
                <div className='mx-auto container h-full grid grid-cols-2'>
                    <div className='w-1/2 h-full flex items-center'>
                        <div className='mr-5'>
                            <img src={logo} alt={'logo'}/>
                        </div>
                        <div className={Boolean(matchDefault) ? styleHeaderLinks + 'border-b-4' : styleHeaderLinks}>
                            <NavLink to={'default'}>
                                Поиск
                            </NavLink>
                        </div>
                        <div className={Boolean(matchFavorites) ? styleHeaderLinks + 'border-b-4' : styleHeaderLinks}>
                            <NavLink to={'favorites'}>
                                Избранное
                            </NavLink>
                        </div>
                    </div>
                    <div className='w-full h-full flex items-center justify-end border-b-white'>
                        <div
                            onClick={() => {
                                dispatch(logout());
                                localStorage.removeItem('token');
                            }}
                            className='px-5 text-headerText hover:cursor-pointer'
                        >
                            Выйти
                        </div>
                    </div>
                </div>
            </header>
            <div className='mx-auto container h-full flex flex-col justify-center items-center'>
                <Outlet/>
            </div>
        </div>
    );
};

export default SearchPage;