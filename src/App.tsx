import React, {useEffect, useState} from 'react';
import './App.css';
import WindowFrame from "./components/WindowFrame";

function App() {

    const [maxValue, setMaxValue] = useState<string>('1')
    const [minValue, setMinValue] = useState<string>('0')
    const [value, setValue] = useState<string>('You need to set MAX and MIN values and to press SET to start')

    useEffect(() => {
            let valueLocalStorage = localStorage.getItem('currentValue')
            let minvalueLocalStorage = localStorage.getItem('minValue')
            let maxvalueLocalStorage = localStorage.getItem('maxValue')

            valueLocalStorage && setValue(JSON.parse(valueLocalStorage))
            minvalueLocalStorage && setMinValue(JSON.parse(minvalueLocalStorage))
            maxvalueLocalStorage && setMaxValue(JSON.parse(maxvalueLocalStorage))
        }
        , [])

    useEffect(() => {
        value !== 'You need to set MAX and MIN values and to press SET to start' &&
        localStorage.setItem('currentValue', value)
        
    }, [value])

    return (
        <div className="App">
            <WindowFrame topWindowType={'minMaxSettings'}
                         bottomWindowType={'minMaxSettings'}
                         minValue={minValue}
                         maxValue={maxValue}
                         value={value}
                         setMinValue={setMinValue}
                         setMaxValue={setMaxValue}
                         setValue={setValue}
            />
            <WindowFrame topWindowType={'presentation'}
                         bottomWindowType={'presentation'}
                         minValue={minValue}
                         maxValue={maxValue}
                         value={value}
                         setMinValue={setMinValue}
                         setMaxValue={setMaxValue}
                         setValue={setValue}
            />
        </div>
    );
}

export default App;
