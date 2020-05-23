import React from "react"

// import styles from "./sliderRow.module.scss"
import { Row, Col } from "react-bootstrap"
import DraggableOverlay from "../../Common/DraggableOverlay/draggableOverlay"
import SiteDropdwon from "../../Common/SiteDropdown/siteDropdown"

import imageBefore from 'images/components/draggableOverlay/slider_patio_before.png';
import imageAfter from 'images/components/draggableOverlay/slider_patio_after.png';

export default function SliderRow(props) {
    return (
        <Row noGutters className="justify-content-center">
            <div style={{position: "relative", width: '100%'}}>
                <div style={{height: 336, width: '100%', backgroundColor: '#F6F6F6', position: 'absolute', top: 0, left: 0}}>
                </div>
            </div>
            <Col xs={7}>
                <div className="justify-self-left" style={{height: 50, marginTop: 32, marginBottom: 15, width: 369}}>
                    <SiteDropdwon />
                </div>
                <DraggableOverlay imageBefore={imageBefore} imageAfter={imageAfter} />
            </Col>
        </Row>
    )
}