import { useState } from 'react';

export default function Selector({ onClick }) {

    const [totalNumber, setTotalNumber] = useState('')
    const [emptyNumber, setEmptyNumber] = useState('')

    const handleClick = function () {
        onClick(totalNumber, emptyNumber)
    }

    return (
        <div>
            <span>Número total de tubos de ensayo</span>
            <input type='text' onChange={event => setTotalNumber(event.target.value)} ></input>
            <br />
            <span>Número de tubos de ensayo vacíos</span>
            <input type='text' onChange={event => setEmptyNumber(event.target.value)}></input>
            <br />
            <button disabled={!totalNumber || !emptyNumber} onClick={() => handleClick()}>Go</button>
        </div>
    )

}