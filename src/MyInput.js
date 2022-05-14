import {$counter,$counter2} from "./Counter";
import {useStore} from "effector-react";
import {createEvent, createStore, sample} from "effector";

const setCounter = createEvent();
const setCounter2=createEvent();
const resetInput = createEvent();

const onChange = createEvent();
const onChange2=createEvent();
const $input = createStore(0)
    .on(onChange, (state,num) => num)
    .reset(resetInput);
const $input2=createStore(0)
    .on(onChange2,(state,num)=>num);
sample({
    clock: setCounter,
    source: $input,
    target: $counter
});
sample({
    clock:$input2,
    source:$input2,
    target:$counter2
})
export const MyInput = () => {
    const state = useStore($input);
    const state2=useStore($input2)
    let onClick = () => {
        setCounter();
        resetInput();
    };
    return (
        <div>
            <input type='number' value={state} onChange={(e) => onChange(e.target.value)}/>
            <button onClick={onClick}>set counter</button>
            <br/>
            <input type="number" value={state2} onChange={(e)=>onChange2(e.target.value)}/>

        </div>
    )
}