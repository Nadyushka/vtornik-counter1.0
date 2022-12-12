import React, {useState} from 'react';
import s from './windowFrame.module.css'
import TopWindow from "./TopWindow/TopWindow";
import BottomWindow from "./BottomWindow/BottomWindow";

type PropsType = {
    topWindowType: "minMaxSettings" | "presentation"
}

const WindowFrame = (props: PropsType) => {

    const [minValue, setMinValue] = useState<string>('0')
    const [maxValue, setMaxValue] = useState<string>('0')
    const [value, setValue] = useState<string>('')

    return (
        <div className={s.windowFrame}>
            <TopWindow topWindowType={props.topWindowType}
                       minValue={minValue}
                       maxValue={maxValue}
                       value={value}
                       setMinValue={setMinValue}
                       setMaxValue={setMaxValue}
                       setValue={setValue}
            />
            <BottomWindow/>
        </div>
    );
};

export default WindowFrame;