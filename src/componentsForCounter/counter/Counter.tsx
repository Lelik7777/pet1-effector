import {createComponent, useStore} from "effector-react";
//@ts-ignore
import s from './Counter.module.css';
import {$counter, $counter2, increment, increment2, reset} from "../../unitsEffector/unitsForCounter";


export const Counter = () => {
    const state = useStore($counter);
    return (<div className={s.counter}>
        Counter: <span>{state}</span>
        <button onClick={increment}>+</button>
        <button onClick={reset}>reset</button>
    </div>)
}

export const Counter2 = createComponent($counter2, (props, state) => (
    <div className={s.counter}>
        Counter2: <span>{state}</span>
        <button onClick={increment2} disabled={state > 4}>+</button>
    </div>
))