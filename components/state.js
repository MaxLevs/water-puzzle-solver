import styles from './state.module.css'
import Tube from './tube'

export default function State({ tubes }) {

    return (
        <div className={styles.container}>
            {tubes.map((el) => {
                return (
                    <div className={styles.tube}>
                        <Tube colors={el} />
                    </div>
                )
            })}
        </div>
    )

}