import React from "react";
import { Link } from "react-router-dom";

import './header.scss';

const logo = require('../../images/logo-wooza.png');

const Header = () => (
    <nav>
        <img src={logo} alt="Logo da Wooza" className="logo"/>
        <ul>
            <li>
                <Link to="/layout">Layout</Link>
            </li>
        </ul>
    </nav>
);

export default Header;