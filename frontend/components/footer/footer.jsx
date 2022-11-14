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
                        <li><a href="/about">About</a></li>
                        <li><a href="/films">Films</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="footer-links">
                    <nav className="footer-links-nav">
                        <div className="links-list">
                            <a href="https://www.linkedin.com/in/torben-ginsberg-095a77112/"><i><AiFillLinkedin/></i></a>
                            <a href="https://github.com/torbenginsberg/Cineboxd"><i><AiFillGithub/></i></a>
                            <a href="https://angel.co/u/torben-ginsberg"><i><FaAngellist/></i></a>
                            <a href="https://torbenginsberg.github.io/"><i><AiOutlineUser/></i></a>
                        </div>
                    </nav>
                </div>
                <p className="footer-message">Cineboxd. Made by a lover of films and an avid user of Letterboxd in Brooklyn, NY.</p>
            </div>
        </footer>
    )
}