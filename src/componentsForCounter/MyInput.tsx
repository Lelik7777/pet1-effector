import {useStore} from 'effector-react';
import {$input, $input2, onChange, onChange2, resetInput, setCounter} from '../unitsEffector/unitsForMyInput';
import {ChangeEvent} from 'react';


export const MyInput = () => {
    const state = useStore($input);
    const state2 = useStore($input2)
    let onClick = () => {
        setCounter();
        resetInput();
    };

    let onChangeInput1 = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.valueAsNumber);
    let onChangeInput2 = (e: ChangeEvent<HTMLInputElement>) => onChange2(e.target.valueAsNumber);
    return (
        <div>
            <input type="number" value={state} onChange={onChangeInput1}/>
            <button onClick={onClick}>set counter</button>
            <br/>
            <input type="number" value={state2} onChange={onChangeInput2}/>

        </div>
    )
}