// components/Navbar/index.js

import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to="/upload" >
                        Upload
                    </NavLink>
                    <NavLink to="/rate" activeStyle>
                        Rate
                    </NavLink>


                </NavMenu>

            </Nav>
        </>
    );
};

export default Navbar;
