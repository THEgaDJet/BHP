import React from "react"
import { Dropdown, Button, ButtonGroup } from 'react-bootstrap';

import styles from "./siteDropdown.module.scss"

export default function SiteDropdown() {
    return (
        <Dropdown as={ButtonGroup}>
            <Button className={styles.dropdownMenu}>Paths, Patios &amp; Fencing</Button>
            <Dropdown.Toggle split className={styles.dropdownToggle} id="dropdown-custom-2" />
            <Dropdown.Menu alignRight>
            <Dropdown.Item eventKey="1">Paths, Patios &amp; Fencing</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3" active>
                Active Item
            </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}