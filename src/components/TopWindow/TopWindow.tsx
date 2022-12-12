import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './topWindow.module.css'

type PropsType = {
    topWindowType: "minMaxSettings" | "presentation"
}

const TopWindow = (props: PropsType) => {

    const [minvalue, setMinValue] = useState<string>('0')
    const [maxvalue, setMaxValue] = useState<string>('0')
    const [value, setValue] = useState<string>('0')

    const onChangeInputHandler = () => {
    }

    const minMaxWindowSet = () => {
        return (
            <div className={s.minMaxWindow}>
                <form>
                    <label htmlFor="minQuantity">Set min value:</label>
                    <input type="number"
                           id="minQuantity"
                           className={s.minQuantity}
                           onChange={e => setMinValue(e.currentTarget.value)}
                           value={minvalue}
                    />
                </form>
                <br/>
                <form>
                    <label htmlFor="maxQuantity">Set max value:</label>
                    <input type="number"
                           id="maxQuantity"
                           className={s.maxQuantity}
                           onChange={e => setMaxValue(e.currentTarget.value)}
                           value={maxvalue}
                    />
                </form>
            </div>)
    }

    const presentationWindowSet = () => {
        return (
            <div>{value}</div>
        )
    }


    return (
        <div className={s.topWindow}>
            {props.topWindowType === 'minMaxSettings' ? minMaxWindowSet() : presentationWindowSet()}
        </div>
    );
};

export default TopWindow;