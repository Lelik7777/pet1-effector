import {createEvent, createStore} from 'effector';
import {MouseEvent} from 'react';

export const increment = createEvent<MouseEvent<HTMLButtonElement>>();
export const increment2 = createEvent<MouseEvent<HTMLButtonElement>>();
export const reset = createEvent<MouseEvent<HTMLButtonElement>>();
const valueFromLocalStorage = localStorage.getItem('counter');
let value;
if (valueFromLocalStorage) {
    value = JSON.parse(valueFromLocalStorage);
}
export const $counter = createStore<number>(value)
    .on(increment, state => state + 1).on(reset, (state, d: any) => d = 0);
export const $counter2 = createStore(0)
    .on(increment2, state => state + 1);
$counter.watch(counter => localStorage.setItem('counter', JSON.stringify(counter)));