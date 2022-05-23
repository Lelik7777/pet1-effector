import {createEffect, createEvent, createStore} from 'effector';
import {MouseEvent} from 'react';
import {apiForOmdb, SearchFilmsType} from '../services/api';

export const sendReqFx = createEffect(async ({title}:{title:string}) => {
    const res = await apiForOmdb.getFilms({title});
    return res.data.Search;
});
export const clearStore = createEvent<MouseEvent<HTMLButtonElement>>();
export const onChange = createEvent<string>();
export const $store = createStore<SearchFilmsType[]>([])
    .on(sendReqFx.doneData, (state, data) => data)
    .reset(clearStore);
export const $input = createStore<string>('')
    .on(onChange, (state, str) => str).reset(clearStore);
