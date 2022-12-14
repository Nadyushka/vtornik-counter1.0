import s from './windowFrame.module.css'
import TopWindow from "./TopWindow/TopWindow";
import BottomWindow from "./BottomWindow/BottomWindow";

type PropsType = {
    topWindowType: "minMaxSettings" | "presentation",
    bottomWindowType: "minMaxSettings" | "presentation"
    minValue: string
    maxValue: string
    value: string
    setMinValue: (minValue: string) => void
    setMaxValue: (maxValue: string) => void
    setValue: (value: string) => void
}

const WindowFrame = (props: PropsType) => {

    return (
        <div className={s.windowFrame}>
            <TopWindow topWindowType={props.topWindowType}
                       minValue={props.minValue}
                       maxValue={props.maxValue}
                       value={props.value}
                       setMinValue={props.setMinValue}
                       setMaxValue={props.setMaxValue}
                       setValue={props.setValue}
            />
            <BottomWindow bottomWindowType={props.bottomWindowType}
                          minValue={props.minValue}
                          maxValue={props.maxValue}
                          value={props.value}
                          setMinValue={props.setMinValue}
                          setMaxValue={props.setMaxValue}
                          setValue={props.setValue}
            />
        </div>
    );
};

export default WindowFrame;