import React, {FC, useState} from 'react';
import Search from "antd/es/input/Search";
import {useAppDispatch} from "../../../hooks/hooks";
import {addText} from "../../../redux/slices/inputSlice";
import {youTubeAPI} from "../../../api/YouTubeAPI/youTubeAPI";
import {getResults} from "../../../redux/slices/resultsSlice";
import {useNavigate} from "react-router-dom";

const DefaultSearch: FC = () => {

    const [loading, setLoading] = useState(false);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onSearch = async (value: string) => {
        if (value.trim()) {
            dispatch(addText(value));
            setLoading(true);
            return await youTubeAPI.searchVideos(value)
                .then(res => {
                    dispatch(getResults(res.data))
                    navigate('/search/default/results')
                })
                .catch(error => console.log(error))
                .finally(() => setLoading(false));
        }
    }

    return (
        <div className='mx-auto container h-full flex flex-col justify-center items-center'>
            <h1 className='text-4xl mb-10'>Поиск видео</h1>
            <div className='w-full text-center'>
                <Search
                    className='w-1/2 focus:bg-inputActiveBg'
                    placeholder="Что хотите посмотреть?"
                    allowClear
                    enterButton="Найти"
                    size="large"
                    loading={loading}
                    onSearch={onSearch}
                />
            </div>
        </div>
    );
};

export default DefaultSearch;