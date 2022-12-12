import React from 'react';
import s from './windowFrame.module.css'
import TopWindow from "./TopWindow/TopWindow";
import BottomWindow from "./BottomWindow/BottomWindow";

type PropsType = {
    topWindowType: "minMaxSettings" | "presentation"
}

const WindowFrame = (props: PropsType) => {

    return (
        <div className={s.windowFrame}>
            <TopWindow topWindowType={props.topWindowType}/>
            <BottomWindow/>
        </div>
    );
};

export default WindowFrame;