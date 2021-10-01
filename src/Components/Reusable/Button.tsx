import React from 'react';

const Button = (props: any) => {
    const {id, style, text} = props;
    return (
        <button id={`button-${id}`} style={style}>{text}</button>
    )
}
export default Button;