import {createEffect, createEvent, createStore, sample} from "effector";
import {useStore} from "effector-react";
import {useEffect} from "react";
import axios from "axios";

const sendReqFx = createEffect(async ({title}) => {

    const url = `http://www.omdbapi.com/?s=${title}&apikey=e786857c`
    const res = await axios.get(url)
    console.log(res.data.Search)
    return res.data.Search;
});
const clearStore = createEvent();
const onChange = createEvent();
const sendReq = createEvent();
const $store = createStore([])
    .on(sendReqFx.doneData, (state, data) => data)
    .reset(clearStore);
const $input = createStore('').on(onChange, (state, string) => string).reset(clearStore);

export const Effect = () => {
    const value = useStore($input);
    const data = useStore($store);
    console.log(data)
    let onChangeInput = (e) => onChange(e.target.value);
    return (<div>
        <input type="text" placeholder='search film' value={value} onChange={onChangeInput}/>
        <button onClick={() => sendReqFx({title: value})}>find</button>
        <button onClick={clearStore}>reset</button>
        <div> array length{data.length}</div>
        <div>{data.map(x => <div style={{marginBottom: '10px', width: '40%'}}>{JSON.stringify(x)}</div>)}</div>
    </div>)
}
