import {createComponent, useStore} from "effector-react";
import {createEvent, createStore} from "effector";

const increment = createEvent();
const increment2 = createEvent();
const reset = createEvent();
export const $counter = createStore(0)
    .on(increment, state => state + 1)
    .reset(reset);
export const $counter2 = createStore(0)
    .on(increment2, state => state + 1);


export const Counter = () => {
    const state = useStore($counter);
    return (<div>
        Counter: {state}
        <button onClick={increment} disabled={state >= 10}>+</button>
        <button onClick={reset}>reset</button>
    </div>)
}

export const Counter2 = createComponent($counter2, (props, state) => (
    <div>
        Counter2: {state}
        <button onClick={increment2} disabled={state>4}>+</button>
    </div>
))