import React from "react"

import styles from "./textBlock.module.scss"

export default function TextBlock(props) {
    return (
        <div className={`text-center w-100 ${styles.p}`}>
            <p>
                {props.text}
            </p>
        </div>
    )
}