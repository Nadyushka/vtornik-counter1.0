import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './topWindow.module.css'

type PropsType = {
    topWindowType: "minMaxSettings" | "presentation"
    minValue: string
    maxValue: string
    value: string
    setMinValue: (minValue: string) => void
    setMaxValue: (maxValue: string) => void
    setValue: (value: string) => void
}

const TopWindow = (props: PropsType) => {


    let startMessage = props.value ? props.value : "You need to press Set"

    const minMaxWindowSet = () => {
        return (
            <div className={s.minMaxWindow}>


                <form>
                    <label htmlFor="maxQuantity">Set max value:</label>
                    <input type="number"
                           id="maxQuantity"
                           className={s.maxQuantity}
                           onChange={e => props.setMaxValue(+e.currentTarget.value > 0 ? e.currentTarget.value : '0')}
                           value={props.maxValue}
                    />
                    <div
                        className={s.maxValueError}>{+props.maxValue <= +props.minValue && `Max value must be more then min value`}</div>
                </form>

                <form>
                    <label htmlFor="minQuantity">Set min value:</label>
                    <input type="number"
                           id="minQuantity"
                           className={s.minQuantity}
                           onChange={e => {
                               props.setMinValue(e.currentTarget.value)
                               props.setValue(e.currentTarget.value)
                           }}
                           value={props.minValue}
                    />
                    <div className={s.minValueError}>{+props.minValue < 0 && `Min value must be positive`}</div>
                </form>
            </div>)
    }

    const presentationWindowSet = () => {

        const fullClassName = `${s.presentationWindow} ${!props.value && s.presentationWindowStart}`

        return (
            <div className={fullClassName}>
                {startMessage}
            </div>
        )
    }


    return (
        <div className={s.topWindow}>
            {props.topWindowType === 'minMaxSettings' ? minMaxWindowSet() : presentationWindowSet()}
        </div>
    );
};

export default TopWindow;