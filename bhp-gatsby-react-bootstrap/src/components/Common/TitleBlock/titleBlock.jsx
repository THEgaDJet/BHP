import React from "react"

import styles from "./titleBlock.module.scss"

export default function TitleBlock(props) {
    return (
        <div className='text-center w-100'>
            <h1 className={styles.underlineMiddle}>
                {props.text}
            </h1>
        </div>
    )
}