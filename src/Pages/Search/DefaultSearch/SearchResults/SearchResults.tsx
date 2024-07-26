import React, {FC, useState} from 'react';
import Search from "antd/es/input/Search";
import list from '../../../../image/Result/SearchResult/list.svg';
import grid from '../../../../image/Result/SearchResult/grid.svg';
import activeList from '../../../../image/Result/SearchResult/activeList.svg'
import activeGrid from '../../../../image/Result/SearchResult/activeGrid.svg';
import CardResults from "../../../../Components/CardResults";
import {useAppDispatch, useAppSelector} from "../../../../hooks/hooks";
import {addText} from "../../../../redux/slices/inputSlice";
import {youTubeAPI} from "../../../../api/YouTubeAPI/youTubeAPI";
import {getResults} from "../../../../redux/slices/resultsSlice";
import ListResults from "../../../../Components/ListResults";
import InfiniteScroll from "react-infinite-scroll-component";


const SearchResults: FC = () => {

    const [resultView, setResultView] = useState<'grid' | 'list'>('grid');
    const {totalResults} = useAppSelector(state => state.results);
    const {text} = useAppSelector(state => state.input);
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(false);

    const onSearch = async (value: string) => {
        if (value.trim()) {
            dispatch(addText(value));
            setLoading(true);
            return await youTubeAPI.searchVideos(value)
                .then(res => {
                    dispatch(getResults(res.data))
                })
                .catch(error => console.log(error))
                .finally(() => setLoading(false));
        }
    }

    return (
        <div className="w-full h-full pt-10">
            <h1 className={'text-3xl mb-3'}>Поиск видео</h1>
            <Search
                defaultValue={text}
                className='w-full focus:bg-inputActiveBg'
                placeholder="Что хотите посмотреть?"
                allowClear
                enterButton="Найти"
                size="large"
                loading={loading}
                onSearch={onSearch}
            />
            <div className={'mt-10 mb-5 flex items-center justify-between'}>
                <div>
                    Видео по запросу<span className={'font-bold'}> {text} </span>
                    <span className={'text-descriptionResult'}>{totalResults}</span>
                </div>
                <div className={'flex items-center'}>
                    <button className={'hover:scale-125 transition duration-300'} onClick={() => setResultView('list')}>
                        {resultView === 'list' ? <img src={activeList} alt="list"/> : <img src={list} alt="list"/>}
                    </button>
                    <button className={'ml-3.5 hover:scale-125 transition duration-300'}
                            onClick={() => setResultView('grid')}>
                        {resultView === 'grid' ? <img src={activeGrid} alt="card"/> : <img src={grid} alt="card"/>}
                    </button>
                </div>
            </div>
            <InfiniteScroll next={() => console.log('next')} hasMore={true} loader={false} dataLength={totalResults}>
                {resultView === 'grid' ? <CardResults/> : <ListResults/>}
            </InfiniteScroll>
        </div>
    );
};

export default SearchResults;