import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment, decrement, incrementByAmount} from '../../features/counter/counterSlice'
const Contact = () => {
 const count =   useSelector((state)=>state.counter.value)
 const dispatch =  useDispatch()
 const handlerIncrement = ()=>{
dispatch(increment())
 }

 const handlerDecrement = ()=>{
  dispatch(decrement())
 }

 const handlerincrementByAmount = ()=>{
  dispatch(incrementByAmount(10))
 }
  return (
    <div>
      <div>{count}</div>
<button onClick={handlerIncrement}>+</button>
<button onClick={handlerDecrement}>-</button>
<button onClick={handlerincrementByAmount}>+10</button>
    </div>
  )
}

export default Contact