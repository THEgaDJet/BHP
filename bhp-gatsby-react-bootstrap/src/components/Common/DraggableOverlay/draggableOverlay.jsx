import PropTypes from "prop-types";
import React from "react";
import Draggable from 'react-draggable';
import { Image } from 'react-bootstrap';

import styles from "./draggableOverlay.module.scss"

class DragableOverlay extends React.Component {
    state = {
        rightBound: 500,
        xPosition: 0
    };

    handleDrag = (e, ui) => {
        const x = this.state.xPosition;
        this.setState({
            xPosition: x + ui.deltaX
        });
    };

    onStart = () => {
        const colWidth = document.getElementById('imageDragger').offsetWidth;
        this.setState({rightBound: colWidth});
    };

    render() {
        const dragHandlers = {onStart: this.onStart};
        const position = this.state.xPosition.toFixed(0) + 'px'

        return (
            <div id='imageDragger' className={styles.draggableContainer}>
                <Image className={styles.imageReveal} src={this.props.imageBefore} />
                <Image className={styles.imageDraggable} src={this.props.imageAfter} style={{objectPosition: position}} />
                <Draggable handle='#dragHandle' 
                    axis="x" 
                    bounds={{left: 0, right: this.state.rightBound}} 
                    onDrag={this.handleDrag} 
                    {...dragHandlers}>
                    <div className={`${styles.draggableWiper} d-flex h-100`}>
                        <div id='dragHandle' className={`${styles.dragHandle} align-self-center m-0`}></div>
                    </div>
                </Draggable>
            </div>
        )
    }
}

DragableOverlay.propTypes = {
    siteTitle: PropTypes.string,
    imageBefore: PropTypes.string,
    imageAfter: PropTypes.string,
}

DragableOverlay.defaultProps = {
    siteTitle: ``,
}

export default DragableOverlay
