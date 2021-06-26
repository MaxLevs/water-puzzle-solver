import styles from './colorSelector.module.css'
import { useState } from 'react'

export default function ColorSelector({ colorSelected, selectColor }) {

    const colors = [
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
            <button className={'black' === colorSelected ? styles.buttonSelected : styles.button} onClick={() => selectColor("black")}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAZUlEQVRIiWNgGCmggYGB4T8a7iBGIyMWsf8UOgbFTCYKDSMbwIKBYvU09wGxFqC7kGgfDhofjFowasGoBRQAFiLVoRfr2Ip5rGDAgugplEavxXBhZD1EAT8GBoYnJFjwBKpnGAIAUcAmPA1WYN0AAAAASUVORK5CYII=" />
            </button>
            {colors.map((color, index) => {
                return <button key={index} className={color === colorSelected ? styles.buttonSelected : styles.button} style={{ backgroundColor: color }} onClick={() => selectColor(color)}></button>
            })}
        </div>
    )

}