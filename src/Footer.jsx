import React from "react";

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <>
            <footer className=" bg-light w-100 text-center footer-css">
                <p> © {year} Yoichi Isagi. All rights reserved | Terms and Conditions Apply.</p>
            </footer>
        </>
    );
}

export default Footer;