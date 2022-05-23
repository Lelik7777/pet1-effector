import {createEvent, createStore} from "effector";
import {MouseEvent} from 'react';

export const switchButton = createEvent<MouseEvent<HTMLButtonElement>>();
export const $isTrue = createStore(true).on(switchButton, (state) => !state);
export const buttonApp={switchButton,$isTrue};