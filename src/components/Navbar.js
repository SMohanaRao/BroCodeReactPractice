import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
    <nav>
        <ul>
            <li>
                <Link exact to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/colorpicker">Color Picker</Link>
            </li>
            <li>
                <Link to="/counter">Counter</Link>
            </li>
        </ul>
    </nav>
);

export default Navbar;