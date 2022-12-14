import React, {useEffect} from 'react';
import s from './bottomWindow.module.css'

type PropsType = {
    bottomWindowType: "minMaxSettings" | "presentation"
    minValue: string
    maxValue: string
    value: string
    setMinValue: (minValue: string) => void
    setMaxValue: (maxValue: string) => void
    setValue: (value: string) => void
}


const BottomWindow = (props: PropsType) => {

    const minMaxWindowSet = () => {

        const onClickSetHandler = () => {
            if (props.minValue < props.maxValue) {
                props.setValue(props.minValue)
                localStorage.setItem('currentValue', props.minValue)
                localStorage.setItem('minValue', props.minValue)
                localStorage.setItem('maxValue', props.maxValue)
            }
        }

        return (
            <button onClick={onClickSetHandler}> SET </button>
        )
    }

    const presentationWindowSet = () => {

        const onClickHandlerIncrement = () => {

            props.value !== 'You need to set MAX and MIN values and to press SET to start' && props.value < props.maxValue && props.setValue(JSON.stringify(+props.value + 1))

        }

        const onClickHandlerClear = () => {
            props.setValue('You need to set MAX and MIN values and to press SET to start')
            props.setMinValue('0')
            props.setMaxValue('1')
            localStorage.clear()

        }

        return (<>
                <button onClick={onClickHandlerIncrement}> INCREMENT</button>
                <button onClick={onClickHandlerClear}> CLEAR</button>
            </>
        )
    }


    return (
        <div className={s.bottomWindow}>
            {props.bottomWindowType === 'minMaxSettings' ? minMaxWindowSet() : presentationWindowSet()}
        </div>
    );
};

export default BottomWindow;