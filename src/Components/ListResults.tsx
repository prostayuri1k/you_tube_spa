import React, {FC} from 'react';
import {useAppSelector} from "../hooks/hooks";

const ListResults: FC = () => {

    const {items} = useAppSelector(state => state.results);

    return (
        <div>
            {items.map(item => {
                return (
                    <a href={`https:/youtube.com/watch/${item.id}`} target={'_blank'} rel={'noreferrer'}
                       className={'block w-3/4'} key={item.id}>
                        <div className={'grid grid-cols-4 gap-5'}>
                            <img src={item.image.medium}
                                 alt={'data-image'}
                                 className={'mb-2 hover:scale-105 transition duration-300 mr-5 col-span-1'}
                            />
                            <div className={'col-span-3'}>
                                <div className={'text-sm mb-2'}>
                                    {item.title}
                                </div>
                                <div className={'text-sm text-descriptionResult'}>
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    </a>
                )
            })}
        </div>
    );
};

export default ListResults;