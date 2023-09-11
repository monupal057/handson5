import React from 'react'
import HOC from './HOC'

const Counterclick = (props) => {
    
    

  return (
    <div className='hoc'>
      <h1>Higher Order Component</h1>
          <h2>
             Count: {props.Count}
          </h2>
          <button onClick={props.handleInc}>Increment</button>
          <button onClick={props.handleDec}>Decrement</button>

    </div>
  )
}

export default HOC(Counterclick)