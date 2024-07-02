import React, {FC} from 'react';
import logo from '../../image/Authorization/logo.svg'
import {Button, Input} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";

const Authorization: FC = () => {
    return (
        <div className="h-screen flex flex-col justify-center">
            <div className="w-1/3 bg-white mx-auto border border-customBlack rounded text-center flex flex-col justify-center py-10 px-20">
                <div className="mx-auto text-center mb-7">
                    <img src={logo} alt={'logo'}/>
                </div>
                <form className='flex flex-col justify-center'>
                    <h3 className='mb-7 text-lg font-medium'>Вход</h3>
                    <div className='mb-7 text-left'>
                        <label className='text-base text-labelText'>Логин</label>
                        <Input
                            className='text-xl focus-within:bg-inputActiveBg'
                            placeholder="Login"
                        />
                    </div>
                    <div className='mb-7 text-left'>
                        <label className='text-base text-labelText'>Пароль</label>
                        <Input.Password
                            className='text-xl focus-within:bg-inputActiveBg'
                            placeholder="input password"
                            iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                        />
                    </div>
                    <Button className={'mx-auto w-1/2 text-xl py-5'} type={"primary"}>Войти</Button>
                </form>
            </div>
        </div>
    );
};

export default Authorization;