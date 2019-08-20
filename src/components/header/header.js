import React from "react";
import { Link } from "react-router-dom";

import './header.scss';

const logo = require('../../images/logo-wooza.png');

const Header = () => (
    <nav>
        <img src={logo} alt="Logo da Wooza" className="logo"/>
        <ul>
            <li>
                <Link to="/flexbox">Flexbox</Link>
            </li>
            <li>
                <Link to="/grid">Grid</Link>
            </li>
        </ul>
    </nav>
);

export default Header;