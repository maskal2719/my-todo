import React from 'react';

type ButtonPropsType = {
    title: string
    callBack: () => void
    className?: string
}

const Button = (props: ButtonPropsType) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button className={props.className} onClick={onClickHandler}>{props.title}</button>
    );
};

export default Button;