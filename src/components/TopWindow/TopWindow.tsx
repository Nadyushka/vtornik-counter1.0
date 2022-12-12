import React from 'react';
import s from './topWindow.module.css'

type PropsType = {
    topWindowType: "minMaxSettings" | "presentation"
}

const TopWindow = (props:PropsType) => {
    return (
        <div className={s.topWindow}>
            
        </div>
    );
};

export default TopWindow;