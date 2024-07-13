import React, {FC} from 'react';
import logo from '../../image/Authorization/logo.svg'
import {Button, Input} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";
import {SubmitHandler, useForm, Controller} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import InputErrorMessage from "../../Components/InputErrorMessage";
import {loginUser} from "../../redux/slices/loginSlice";
import {useAppDispatch} from "../../hooks/hooks";

const Authorization: FC = () => {

    const schema = yup.object({
        email: yup.string().email('enter valid email').required('Обязательное поле'),
        password: yup
            .string()
            .required('Обязательное поле')
            .min(8, 'Минимальная длина - 8')
            .matches(RegExp('(.*[a-z].*)'), 'Не менее 1 прописной буквы')
            .matches(RegExp('(.*[A-Z].*)'), 'Не менее 1 заглавной буквы')
            .matches(RegExp("(.*\\d.*)"), 'Не менее 1 цифры')
            .matches(RegExp('[!@#$%^&*(),.?":{}|<>]'), 'Не менее 1 специального символа'),
    })

    type FormData = yup.InferType<typeof schema>;

    const {control, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
        dispatch(loginUser(data));
    };

    return (
        <div className="h-screen flex flex-col justify-center">
            <div
                className="w-1/3 bg-white mx-auto border border-customBlack rounded text-center flex flex-col justify-center py-10 px-20">
                <div className="mx-auto text-center mb-7">
                    <img src={logo} alt={'logo'}/>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center'>
                    <h3 className='mb-7 text-lg font-medium'>Вход</h3>
                    <div className='mb-7 text-left'>
                        <label className='text-base text-labelText'>Email</label>
                        <Controller
                            control={control}
                            name={'email'}
                            render={({field}) =>
                                <Input
                                    {...field}
                                    className='text-xl focus-within:bg-inputActiveBg'
                                    placeholder="Email"
                                />}
                        />
                        {errors.email && <InputErrorMessage message={errors.email.message}/>}
                    </div>
                    <div className='mb-7 text-left'>
                        <label className='text-base text-labelText'>Пароль</label>
                        <Controller
                            control={control}
                            name={'password'}
                            render={({field}) =>
                                <Input.Password
                                    {...field}
                                    className='text-xl focus-within:bg-inputActiveBg'
                                    placeholder="password"
                                    iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                                />
                            }
                        />
                        {errors.password && <InputErrorMessage message={errors.password.message}/>}
                    </div>
                    <Button htmlType={"submit"} className={'mx-auto w-1/2 text-xl py-5'} type={"primary"}>
                        {
                            'Войти'
                        }
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Authorization;