import {createEffect, createEvent, createStore} from 'effector';
import {apiForLogin, DataTypa, ResponseMyType} from '../services/api';
import {MouseEvent} from 'react';

export const loginFx = createEffect(async ({email, password}: DataTypa) => {
    const res = await apiForLogin.postRequest({email, password});
    return res.data;
});
const data: ResponseMyType = {
    data: {userId: 0},
    fieldErrors: [],
    message: [],
    resultCode: 1
}
export const reset = createEvent<MouseEvent<HTMLButtonElement>>();
export const $data = createStore<ResponseMyType>(data)
    .on(loginFx.doneData, (state, data) => data)
    .reset(reset);
export const $inputEmail = createStore<string>('lelik21212121@gmail.com')
export const $inputPassword = createStore<string>('enter_free');