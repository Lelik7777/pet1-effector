import React from 'react'
import {createEffect} from 'effector'
import {createComponent, useStore} from 'effector-react'
import {logDOM} from "@testing-library/react";
import {Counter} from "./Counter";

//defining simple Effect, which results a string in 3 seconds

const sendFormFx = createEffect(
    formData =>
        new Promise(rs =>
            setTimeout(rs, 1000, `Signed in as [${formData.get('name')}]`),
        ),
)

//applying side-effect, upon sendFormFx `doneData`
sendFormFx.doneData.watch(result => {
    alert(result)
})

const Loader = () => {
    //approach #1: explicit store usage, with hook `useStore`
    const loading = useStore(sendFormFx.pending) //typeof loading === "boolean"

    return loading ? <div>Loading...</div> : null
}

const SubmitButton = createComponent(sendFormFx.pending, (props, loading) => (
    //approach #2: implicit store usage
    <button disabled={loading} type="submit">
        Submit
    </button>
))

const onSubmit = sendFormFx.prepend(e => new FormData(e.target)) //transforming upcoming data, from DOM Event to FormData

onSubmit.watch(e => {
    e.preventDefault()
})

 export const App1 = () => (
     <div>
         <form onSubmit={onSubmit}>
             Login: <input name="name"/>
             <br/>
             Password: <input name="password" type="password"/>
             <br/>
             <Loader/>
             <SubmitButton/>
         </form>
     </div>
)

