import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin, AiOutlineUser } from "react-icons/ai";
import { FaAngellist } from "react-icons/fa";

export default () => {
    return (
        <footer className="page-footer">
            <div className="footer-content-wrap">
                <nav className="footer-nav">
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/films">Films</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <div className="footer-links">
                    <nav className="footer-links-nav">
                        <div>
                            <a href="https://github.com/torbenginsberg/Cineboxd" target="_blank"><i><AiFillGithub/></i></a>
                            <a href="https://www.linkedin.com/in/torben-ginsberg-095a77112/" target="_blank"><i><AiFillLinkedin/></i></a>
                            <a href="https://angel.co/u/torben-ginsberg" target="_blank"><i><FaAngellist/></i></a>
                            <a href="https://torbenginsberg.github.io/" target="_blank"><i><AiOutlineUser/></i></a>
                        </div>
                    </nav>
                </div>
            </div>
            <p className="footer-message">Cineboxd. Made by a lover of films and an avid user of Letterboxd in Brooklyn, NY.</p>
        </footer>
    )
}