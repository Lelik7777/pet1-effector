import './App.css';
import {createEvent, createStore} from "effector";
import {useStore} from "effector-react";
import {Counter, Counter2} from "./componentsForCounter/Counter";
import {MyInput} from "./componentsForCounter/MyInput";

const onChange = createEvent();
const onSubmit = createEvent();
const $input = createStore('hello').on(onChange, (state, value) => value)
const $store = createStore([]).on(onSubmit, (state, value) => state.push(value));

function App() {
    const input = useStore($input)
    // $store.watch(x=>console.log(x));
    console.log($input)
    return (
        <div className="App">
            <div className='container'>
                <MyInput/>
                <Counter/>
                <Counter2/>
            </div>
        </div>
    );
}

export default App;
