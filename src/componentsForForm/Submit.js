import {createEffect, createEvent, createStore} from "effector";
import axios from "axios";
import {useStore} from "effector-react";
import {Preloader} from "./Preloader";

 export const loginFx = createEffect(async ({email, password}) => {
    const instance = axios.create({
        baseURL: `https://social-network.samuraijs.com/api/1.0`,
        withCredentials: true,
        headers: {
            'API-KEY': '418ccc24-66fd-40f8-b071-9bde653329c9',
        },
    });
    const res = await instance.post('/auth/login', {email, password});
    console.log(res.data.resultCode)
    return res.data;
});
const data={
    data:{userId:0},
    fieldErrors:[],
    message:[],
    resultCode:1
}
const reset=createEvent();
const $data=createStore(data)
    .on(loginFx.doneData,(state,data)=>data)
    .reset(reset);
const $inputEmail = createStore('lelik21212121@gmail.com')
const $inputPassword = createStore('enter_free');
export const Submit = () => {
    const email = useStore($inputEmail);
    const password = useStore($inputPassword);
    const data=useStore($data);
    const loarding=useStore(loginFx.pending)
    console.log(data)
    return (<div>
        <input type="text" value={email}/>
        <br/>
        <input type="text" value={password}/>
        <br/>
        <input type='submit' onClick={() => loginFx({email, password})}/>
        <button onClick={reset}>reset</button>
        {loarding&&<Preloader/>}
        <div style={{color:'red'}}>Login:<span style={{color:'blue',fontWeight:'bolder'}}>{data.resultCode === 0 ? 'true' : 'false'}</span></div>
    </div>)
}