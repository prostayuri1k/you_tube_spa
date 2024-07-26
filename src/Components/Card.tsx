import React, {FC} from 'react';

type CardProps = {
    title: string;
    description: string;
    image: {
        high: string;
        medium: string;
    };
    id: string
}

const Card: FC<CardProps> = ({id, description, image, title}) => {
    return (
        <a href={`https:/youtube.com/watch/${id}`} target={'_blank'} rel={'noreferrer'} className={''}>
            <img src={image.medium}
                 alt={'data-image'}
                 className={'mb-2 hover:scale-110 transition duration-300'}
            />
            <div className={'text-sm mb-2'}>
                {title}
            </div>
            <div className={'text-sm text-descriptionResult'}>
                {description}
            </div>
            <div className={'text-sm text-descriptionResult'}>
                {}
            </div>
        </a>
    );
};

export default Card;