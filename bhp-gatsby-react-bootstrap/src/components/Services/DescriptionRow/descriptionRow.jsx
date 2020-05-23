import React from "react"

import styles from "./descriptionRow.module.scss"
import { Row, Col } from "react-bootstrap"
import TitleBlock from "../../Common/TitleBlock/titleBlock"
import HeadingBlock from "../../Common/HeadingBlock/headingBlock"
import TextBlock from "../../Common/TextBlock/textBlock"
import ColBreak from "../../Common/ColumnBreak/colBreak"

export default function DescriptionRow() {
    return (
        <Row noGutters className="justify-content-center" >
            <Col xs={7} className={`text-center ${styles.topCol}`}>
                <TitleBlock text='Paths, Patios &amp; Fencing' />
            </Col>

            <ColBreak />

            <Col xs={5} className={`text-center ${styles.middleCol}`}>
                <div>
                    <HeadingBlock text='Paths, patios &amp; fencing.. the often overlooked part of your garden, that is until something bad happens and you need to replace or maintain your boundaries.' />
                </div>
            </Col>

            <ColBreak />

            <Col xs={5} className={`text-center ${styles.bottomCol}`}>
                <div style={{}}>
                    <TextBlock text='Adding a quality fence to your garden creates a brilliant landscaping backdrop while defining the boundaries of your home. B.R.P will arrange a convenient time to come to your house and provide you with a free quotation, calling upon our expertise and experience in this field our quotations are very competitive. We use only the finest materials with our paths, patios and fencing to make sure everything withstands the British winters. We build Patios and pathways to the same standard to make sure your entire garden is finished to a high standardard to make sure your entire garden is finished to a high standardard to make sure your entire garden is finished to a high standardard to make sure your entire garden is finished to a high standard.' />
                </div>
            </Col>
        </Row>
    )
}