import styles from './tube.module.css'

export default function Tube({ colors, readonly, onClick }) {

    const emptyTube = [null, null, null, null]
    const filledTube = emptyTube.map((el, index) => colors[index])

    const handleCick = function () {
        if (!readonly) onClick();
    }

    return (
        <div className={styles.tube}>
            {filledTube.map((el, index) => {
                return <div key={index} className={index ? styles.middle : styles.bottom} style={{ backgroundColor: el || 'transparent' }} onClick={() => handleCick()}></div>
            })}
            <div className={styles.top}></div>
        </div>
    )
}