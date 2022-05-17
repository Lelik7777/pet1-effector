import {createEffect, createEvent, createStore} from "effector";
import {useStore} from "effector-react";
import axios from "axios";
import {Preloader} from "./Preloader";

//search film by name
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
    const loading = useStore(sendReqFx.pending);
    let onChangeInput = (e) => onChange(e.target.value);
    return (<div style={{marginTop: '20px'}}>
        <input type="text" placeholder='search film' value={value} onChange={onChangeInput}/>
        <button onClick={() => sendReqFx({title: value})}>find</button>
        <button onClick={clearStore}>reset</button>
        <div>
            array length{data.length}
            {loading&&<Preloader/>}
        </div>

        <div>{data.map(x => <div style={{marginBottom: '10px', width: '40%'}}>{JSON.stringify(x)}</div>)}</div>
    </div>)
}
