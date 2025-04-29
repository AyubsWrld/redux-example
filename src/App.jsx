import { useState } from 'react'
import { useSelector, useDispatch }  from 'react-redux' ; 
import { increment , decrement, incrementByValue } from './app/countSlice.jsx' ; 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const count = useSelector( state => state.counter.value ) ; 
  const dispatcher = useDispatch() ; 
  return (
    <>
      <div className="card">
        <p> { count } </p>
        <div className="buttonDiv">
          <button onClick={() => dispatcher(increment())}>
            Inrement
          </button>
          <button onClick={ () => dispatcher(decrement()) }>
            Decrement
          </button>
        </div>
      </div>
    </>
  )
}

export default App
