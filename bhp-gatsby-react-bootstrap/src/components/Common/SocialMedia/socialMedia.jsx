import React from "react"
import { IconContext } from "react-icons";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram
} from 'react-icons/fa'
import { Nav } from "react-bootstrap";

export default function SocialMedia() {
    return (
        <IconContext.Provider className='align-middle' value={{ color: "white" }}>
            <Nav.Link className='p-2'>
                    <FaFacebookF />
            </Nav.Link>
            <Nav.Item className='p-2'>
                    <FaTwitter />
            </Nav.Item>
            <Nav.Item className='p-2'>
                <FaInstagram />
            </Nav.Item>
        </IconContext.Provider>
    )
}