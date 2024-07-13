import React, {FC} from 'react';
import logo from '../../image/Search/logo.svg';
import Search from "antd/es/input/Search";
import {useAppDispatch} from "../../hooks/hooks";
import {logout} from "../../redux/slices/loginSlice";


const SearchPage: FC = () => {

    const dispatch = useAppDispatch();

    return (
        <div className="h-screen flex flex-col">
            <header className='border-b border-customBlack bg-white h-20'>
                <div className='mx-auto container h-full grid grid-cols-2'>
                    <div className='w-1/2 h-full flex items-center'>
                        <div className='mr-5'>
                            <img src={logo} alt={'logo'}/>
                        </div>
                        <div className='px-5 text-headerText'>Поиск</div>
                        <div className='px-5 text-headerText'>Избранное</div>
                    </div>
                    <div className='w-full h-full flex items-center justify-end'>
                        <div onClick={() => {
                            dispatch(logout());
                            localStorage.removeItem('token');
                        }}
                             className='px-5 text-headerText'>Выйти
                        </div>
                    </div>
                </div>
            </header>
            <section className='mx-auto container h-full flex flex-col justify-center items-center'>
                <h1 className='text-4xl mb-10'>Поиск видео</h1>
                <div className='w-full text-center'>
                    <Search
                        className='w-1/2'
                        placeholder="Что хотите посмотреть?"
                        allowClear
                        enterButton="Найти"
                        size="large"
                        // onSearch={onSearch}
                    />
                </div>
            </section>
        </div>
    );
};

export default SearchPage;