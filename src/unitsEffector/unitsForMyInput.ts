import {createEvent, createStore, sample} from 'effector';
import {$counter, $counter2} from './unitsForCounter';

export const setCounter = createEvent();
export const resetInput = createEvent();

export const onChange = createEvent<number>();
export const onChange2 = createEvent<number>();
export const $input = createStore<number>(0)
    .on(onChange, (state, num) => num)
    .reset(resetInput);
export const $input2 = createStore<number>(0)
    .on(onChange2, (state, num) => num);

sample({
    clock: setCounter,
    source: $input,
    target: $counter
});

sample({
    clock: $input2,
    source: $input2,
    target: $counter2
})
