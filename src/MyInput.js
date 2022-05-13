import {$counter} from "./Counter";
import {useStore} from "effector-react";
import {createEvent, createStore, sample} from "effector";

const setCounter = createEvent();
const resetInput = createEvent();
const onChange = createEvent();
const $input = createStore(0)
    .on(onChange, state => state + 1)
    .reset(resetInput);
sample({
    clock: setCounter,
    source: $input,
    target: $counter
})
export const MyInput = () => {
    const state = useStore($input);
    let onClick = () => {
        setCounter();
        resetInput();
    };
    return (
        <div>
            <input type='number' value={state} onChange={(e) => onChange(e.target.value)}/>
            <button onClick={onClick}>set counter</button>
        </div>
    )
}