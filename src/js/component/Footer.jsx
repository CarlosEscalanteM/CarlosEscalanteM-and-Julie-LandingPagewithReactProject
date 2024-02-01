// Footer: Julie

import React from "react";

//     possible background color options below:
//     background-color: var(--bs-body-bg);
//     or #343940ff or rgb(52, 57, 64)

const Footer = () => {
    return (
        <footer className="bg-black text-white fixed-bottom">
            <div className="container pt-4 pb-3 text-center">
                <p className="fs-6">
                    Copyright <i className="fa-regular fa-copyright" style={{ color: '#ffffff' }}></i> Your Website 2018
                </p>
            </div>
        </footer>
    );
};

export default Footer;
