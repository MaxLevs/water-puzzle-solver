import styles from './tube.module.css'

export default function Tube({ colors, readonly }) {

    const emptyTube = [null, null, null, null]
    const filledTube = emptyTube.map((el, index) => colors[index])

    return (
        <div className={styles.tube}>
            {filledTube.map((el, index) => {
                return <div key={index} className={index ? styles.middle : styles.bottom} style={{ backgroundColor: el || 'transparent' }}></div>
            })}
            <div className={styles.top}></div>
        </div>
    )
}