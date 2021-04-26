
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';


export default () => {
    return (
        <Menu>
            <a className="menu-item" href="/Magazine">
                Magazine
            </a>
            <a className="menu-item" href="/Company">
                Company
             </a>
            <a className="menu-item" href="/Foundation">
                Foundation
            </a>
            <a className="menu-item" href="/Careers">
                Careers
            </a>
            <a className="menu-item" href="/Contacts">
                Contacts
            </a>
        </Menu>
    );
};