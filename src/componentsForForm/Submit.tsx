import {useStore} from "effector-react";
import {Preloader} from "./Preloader";
import {$data, $inputEmail, $inputPassword, loginFx, reset} from "../unitsEffector/unitsForSubmit";
// login to
export const Submit = () => {
    const email = useStore($inputEmail);
    const password = useStore($inputPassword);
    const data = useStore($data);
    const loading = useStore(loginFx.pending);
    return (<div>
        <input type="text" value={email}/>
        <br/>
        <input type="text" value={password}/>
        <br/>
        <input type='submit' onClick={() => loginFx({email, password})}/>
        <button onClick={reset}>reset</button>
        {loading && <Preloader/>}
        <div style={{color: 'red'}}>Login:<span
            style={{color: 'blue', fontWeight: 'bolder'}}>{data.resultCode === 0 ? 'true' : 'false'}</span></div>
    </div>)
}