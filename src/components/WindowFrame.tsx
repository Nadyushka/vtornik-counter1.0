import React from 'react';
import TopWindow from "./TopWindow/TopWindow";
import BottomWindow from "./BottomWindow/BottomWindow";

type PropsType = {
    topWindowType: "minMaxSettings" | "presentation"
}

const WindowFrame = (props: PropsType) => {

    return (
        <div>
            <TopWindow topWindowType={props.topWindowType}/>
            <BottomWindow/>
        </div>
    );
};

export default WindowFrame;