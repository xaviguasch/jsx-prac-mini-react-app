import React from 'react'
import './App.css'
import Heading from './Heading'
import { add, multiply, subtract, divide } from '../calculator'

function App() {
    return (
        <div className='App'>
            <Heading />

            <ul>
                <li>{add(1, 2)}</li>
                <li>{multiply(2, 3)}</li>
                <li>{subtract(7, 2)}</li>
                <li>{divide(5, 2)}</li>
            </ul>
        </div>
    )
}

export default App
