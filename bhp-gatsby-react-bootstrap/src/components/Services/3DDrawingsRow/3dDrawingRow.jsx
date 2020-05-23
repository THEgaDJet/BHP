import React from "react"
import { Row, Col } from "react-bootstrap"
import TitleBlock from "../../Common/TitleBlock/titleBlock"
import TextBlock from "../../Common/TextBlock/textBlock"

import styles from "./3dDrawingRow.module.scss"
import ColBreak from "../../Common/ColumnBreak/colBreak"

export default function ThreeDDrawingRow() {
    return (
        <Row className={`${styles.mobileBackground} justify-content-center`}>
            <Col xs={7} className={`p-0 ${styles.topCol}`}>
                <TitleBlock text='3D Drawings' />
            </Col>

            <ColBreak />

            <Col xs={3} className={`text-center ${styles.bottomCol}`}>
                <div>
                    <TextBlock text='We offer 3d drawings for Landscaping Design at competitive prices! Get in touch to find out more!' />
                </div>
            </Col>
        </Row>
    )
}