import styles from './state.module.css'
import Tube from './tube'

export default function State({ tubes, numberOfReadOnly, colorSelected, onClick }) {

    const handleClick = function (index) {
        onClick(index, colorSelected)
    }

    return (
        <div className={styles.container}>
            {tubes.map((el, index) => {
                return (
                    <div key={index} className={styles.tube}>
                        <Tube colors={el} readonly={index >= tubes.length - numberOfReadOnly} onClick={() => handleClick(index)} />
                    </div>
                )
            })}
        </div>
    )

}