import React from "react"

import styles from "./headingBlock.module.scss"

export default function HeadingBlock(props) {
    return (
        <div className='text-center w-100'>
            <h2 className={styles.h2}>
                {props.text}
            </h2>
        </div>
    )
}