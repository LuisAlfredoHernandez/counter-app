import propTypes from 'prop-types'
import './App.css'
import {useState} from 'react'


export default function App({value}) {
  const [counter, setCounter] = useState(value);
 
  const increase = () => setCounter(counter+1)
  const decrease = () => setCounter(counter-1)
  const reset = () => setCounter(value)
 
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={increase}>1+</button>
      <button onClick={decrease}>1-</button>
      <button onClick={reset}>RESET</button>
    </>
  )
}

App.propTypes={
  name:propTypes.string,
  title:propTypes.string,
  value:propTypes.number.isRequired
}

App.defaultProps ={
  name: "Vegueta",
  title: "DBZ",
  subTitle: 22222,
}