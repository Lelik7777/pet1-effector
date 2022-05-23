import './App.css';
import {Counter, Counter2} from './componentsForCounter/counter/Counter';
import {MyInput} from './componentsForCounter/MyInput';
import {Submit} from './componentsForForm/Submit';
import {useStore} from 'effector-react';
import {Effect} from './componentsForForm/Effect';
import {buttonApp} from './unitsEffector/unitsForApp';


function App() {
    const isTrue = useStore(buttonApp.$isTrue);
    return (
        <div className="App">
            <div className="container">
                <button onClick={buttonApp.switchButton}>{isTrue ? 'to form' : 'to counter'}</button>
                {
                    isTrue
                        ? <div className="block">
                            <MyInput/>
                            <Counter/>
                            <Counter2/>
                        </div>
                        :
                        <div className="block">
                            <Submit/>
                            <Effect/>
                        </div>
                }
            </div>
        </div>
    );
}

export default App;
