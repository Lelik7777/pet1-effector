import './App.css';
import {Counter, Counter2} from "./componentsForCounter/Counter";
import {MyInput} from "./componentsForCounter/MyInput";
import {Submit} from "./Submit";
import {createEffect, createEvent, createStore} from "effector";
import {useStore} from "effector-react";
import {Effect} from "./Effect";





const switchBut = createEvent();
const $isTrue = createStore(true).on(switchBut, (state) => !state)
const styleForBlock={
    marginTop:'20px'
}
function App() {
    const isTrue = useStore($isTrue);

    return (
        <div className="App">
            <div className='container'>
                <button onClick={switchBut}>{isTrue ? 'to form' : 'to counter'}</button>
                {
                    isTrue
                        ? <div style={styleForBlock}>
                            <MyInput/>
                            <Counter/>
                            <Counter2/>
                        </div>
                        :
                        <div style={styleForBlock}>
                            <Submit/>
                            <Effect/>
                        </div>
                }

            </div>
        </div>
    );
}

export default App;
