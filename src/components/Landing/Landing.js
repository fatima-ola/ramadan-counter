import React from 'react';
import ramadan from '../../assests/ramadan.png';
import Counter from '../Counter/Counter'

const counter = () => {
    return (
        <div>
            <div className="ramadan">
                <img src={ramadan} alt="ramadan" /> 
            </div>
            <Counter />
        </div>
    )
}

export default counter
