import React from 'react'
import { useState } from 'react'

const HOC = (WrappedComponent) => {
    const WithCount = () => {
        const [Count, setCount] = useState(0)
        

        const handleInc = () => { setCount(Count + 1) };
        const handleDec = () => { setCount(Count - 1) };
    
        return (
            <div>
                <WrappedComponent
                    Count={Count}
                    handleInc={handleInc}
                    handleDec={handleDec} />
          
            </div>
        )
    }
    return WithCount
}

export default HOC