import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { plus , minus, reset} from './redux/clices/counterSlice';
// import { minus, plus, reset } from './redux/slices/counterSlice';


const Counter = () => {
    const {counterData}=useSelector((state)=>state.counter);
    const dispatch=useDispatch();

    const plusCounter=()=>{
        dispatch(plus())
    }
    const minusCounter=()=>{
        dispatch(minus())
    }
    const resetCounter=()=>{
        dispatch(reset())
    }
  return (
    <div>
        <h1>{counterData}</h1>
        <button onClick={plusCounter}>+</button>
        <button onClick={minusCounter}>-</button>
        <button onClick={resetCounter}>reset</button>
    </div>
  )
}

export default Counter