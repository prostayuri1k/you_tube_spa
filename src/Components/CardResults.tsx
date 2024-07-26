import React, {FC} from 'react';
import {useAppSelector} from "../hooks/hooks";
import Card from "./Card";

const CardResults: FC = () => {

    const {items} = useAppSelector(state => state.results);

    return (
        <div>
            {
                items.length === 0
                    ?
                    <div className={'text-3xl font-bold mx-auto'}>Видео не найдены...</div>
                    :
                    <div className={'grid grid-cols-4 gap-5'}>
                        {items.map(item => <Card key={item.id} {...item}/>)}
                    </div>
            }
        </div>

    );
};

export default CardResults;