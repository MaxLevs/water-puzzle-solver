import styles from './solution.module.css'
import State from './state'
import { useState } from 'react';

export default function Solution({ history }) {

    const [currentState, updateState] = useState(history[0]);
    const [currentIndex, updateIndex] = useState(0);

    const handleClick = function (increment) {
        const nextIndex = currentIndex + increment
        updateIndex(nextIndex)
        updateState(history[nextIndex])
    }

    return (
        <div className={styles.container}>
            <State tubes={currentState} />
            <div className={styles.buttonsContainer}>
                <button className={styles.button} disabled={currentIndex === 0} onClick={() => handleClick(-1)}>{'<'}</button>
                <button className={styles.button} disabled={currentIndex === history.length - 1} onClick={() => handleClick(1)}>{'>'}</button>
            </div>
        </div>
    )

}