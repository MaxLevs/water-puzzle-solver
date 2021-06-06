import styles from './state.module.css'
import Tube from './tube'

export default function State({ tubes }) {

    return (
        <div className={styles.container}>
            {tubes.map((el, index) => {
                return (
                    <div key={index} className={styles.tube}>
                        <Tube colors={el} />
                    </div>
                )
            })}
        </div>
    )

}