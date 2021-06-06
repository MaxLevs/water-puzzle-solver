import styles from './colorSelector.module.css'

export default function ColorSelector({ selectColor }) {

    const colors = [
        "black",   // Borrar
        "#B41722", // Rojo
        "#3921C1", // Azul oscuro
        "#68E879", // Verde claro
        "#6E1C8B", // Violeta
        "#5F615E", // Gris
        "#E08346", // Naranja
        "#DE4E72", // Rosa
        "#754805", // Marron
        "#176F33", // Verde oscuro
        "#EAE05D", // Amarillo
        "#5BA5E2", // Azul claro
        "#76A20D"  // Pistacho
    ]

    return (
        <div className={styles.container}>
            {colors.map((color, index) => {
                return <button key={index} className={styles.button} style={{ backgroundColor: color }} onClick={() => selectColor(color)}></button>
            })}
        </div>
    )

}