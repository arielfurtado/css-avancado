import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
    <nav>
        <ul>
            <li>
                <Link to="/flexbox">flexbox</Link>
            </li>
            <li>
                <Link to="/grid">Grid</Link>
            </li>
        </ul>
    </nav>
);

export default Header;