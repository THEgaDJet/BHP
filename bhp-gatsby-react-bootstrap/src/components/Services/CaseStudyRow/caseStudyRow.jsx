import React from "react"

import styles from "./caseStudyRow.module.scss"
import { Row, Col, Image } from "react-bootstrap"
import TitleBlock from "../../Common/TitleBlock/titleBlock"

import imageAfter from 'images/components/draggableOverlay/slider_patio_after.png';

export default function CaseStudyRow() {
    return (
        <Row noGutters className={`${styles.hideOnMobile} ${styles.caseStudyRow} justify-content-center`}>
            <Col>
                <Row className="justify-content-center" >
                    <Col xs={7} className='p-0' style={{marginTop: 85}}>
                        <TitleBlock text='Case studies' />
                    </Col>
                    <Col xs={7} className={`p-0 ${styles.imageCol}`}>
                        <Image src={imageAfter} className={`w-100 h-100 ${styles.caseStudyImage}`} />
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}