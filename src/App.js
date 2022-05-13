import './App.css';
import {createEvent, createStore} from "effector";
import {useStore} from "effector-react";
const onChange=createEvent();
const onSubmit=createEvent();
const $input=createStore('hello').on(onChange,(state,value)=>value)
const $store=createStore([]).on(onSubmit,(state,value)=>state.push(value));

function App() {
    const input=useStore($input)
   // $store.watch(x=>console.log(x));
    console.log($input)
  return (
    <div className="App">
       <div className='container'>
               <input type="text"  value={input} onChange={(x)=>onChange(x.target.value)}/>
       </div>
    </div>
  );
}

export default App;
