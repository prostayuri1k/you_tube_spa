import React, {FC} from 'react';

type InputErrorMessageProps = {
    message: string | undefined;
}

const InputErrorMessage: FC<InputErrorMessageProps> = ({message}) => {
    return (
        <p className='text-base text-headerText'>
            {message}
        </p>
    );
};

export default InputErrorMessage;