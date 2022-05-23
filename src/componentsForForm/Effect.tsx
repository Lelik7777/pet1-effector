import {useStore} from 'effector-react';
import {Preloader} from './Preloader';
import {$input, $store, clearStore, onChange, sendReqFx} from '../unitsEffector/unitsForEffect';
import {ChangeEvent} from 'react';

//search film by name

export const Effect = () => {
    const value = useStore($input);
    const data = useStore($store);
    const loading = useStore(sendReqFx.pending);
    let onChangeInput = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value);
    return (<div style={{marginTop: '20px'}}>
        <input type="text" placeholder="search film" value={value} onChange={onChangeInput}/>
        <button onClick={() => sendReqFx({title: value})}>find</button>
        <button onClick={clearStore}>reset</button>
        <div>
            array length{data.length}
            {loading && <Preloader/>}
        </div>

        <div>{data.map(x => <div style={{marginBottom: '10px', width: '40%'}}>{JSON.stringify(x)}</div>)}</div>
    </div>)
}
