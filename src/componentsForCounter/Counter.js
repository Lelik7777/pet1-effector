import {createComponent, useStore} from "effector-react";
import {createEvent, createStore, sample} from "effector";

const increment = createEvent();
const increment2 = createEvent();
const reset = createEvent();
let value = JSON.parse(localStorage.getItem('counter'));
export const $counter = createStore(value)
    .on(increment, state => state + 1).on(reset, (state, d) => d = 0);
export const $counter2 = createStore(0)
    .on(increment2, state => state + 1);
sample({
    clock: $counter,
    source: $counter,
    fn: (counter) => localStorage.setItem('counter', JSON.stringify(counter)),
    target: $counter
})
const styleForSpan={
    color:'red',
    fontSize:'1.2rem',
    marginRight:'10px'
}

export const Counter = () => {
    const state = useStore($counter);


    return (<div>
        Counter: <span style={styleForSpan}>{state}</span>
        <button onClick={increment}>+</button>
        <button onClick={reset}>reset</button>
    </div>)
}

export const Counter2 = createComponent($counter2, (props, state) => (
    <div>
        Counter2: <span style={styleForSpan}>{state}</span>
        <button onClick={increment2} disabled={state > 4}>+</button>
    </div>
))