import { useState } from 'react';
import styles from './selector.module.css'

export default function Selector({ onClick }) {

    const [totalNumber, setTotalNumber] = useState('')
    const [emptyNumber, setEmptyNumber] = useState('')

    const handleClick = function () {
        onClick(totalNumber, emptyNumber)
    }

    return (
        <div>
            <span>Número total de tubos de ensayo</span>
            <input type='text' className={styles.input} onChange={event => setTotalNumber(event.target.value)} ></input>
            <br />
            <span>Número de tubos de ensayo vacíos</span>
            <input type='text' className={styles.input} onChange={event => setEmptyNumber(event.target.value)}></input>
            <br />
            <div className={styles.buttonContainer}>
                <button className={styles.button} disabled={!totalNumber || !emptyNumber} onClick={() => handleClick()}>Go</button>
            </div>
        </div>
    )

}