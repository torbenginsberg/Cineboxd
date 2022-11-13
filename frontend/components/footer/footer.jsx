import React from "react";
import { Link } from "react-router-dom";

export default () => {
    return (
        <footer className="page-footer">
            <div className="footer-content-wrap">
                <nav className="footer-nav">
                    <ul>
                        <li><a href="/about">About</a></li>
                        <li><a href="/films">Films</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="footer-links"></div>
                <p className="footer-message"></p>
            </div>
        </footer>
    )
}