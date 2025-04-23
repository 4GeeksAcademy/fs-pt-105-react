import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import "../../styles/header.css"

export const Header = () => {
    return (
        <nav className="navbar bg-dark border-bottom navbar-expand-md border-body" data-bs-theme="dark">
            <div className="container-fluid">
                 <h3 className="title-logo me-auto mb-0">Start Bootstrap</h3>

                <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarButtons"
                aria-controls="navbarButtons" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarButtons">
                    <ul className="navbar-nav d-grid gap-2 d-md-flex align-items-center">
                        <li className="nav-item">
                            <div className="navbar-nav">
                                <a className="nav-link"  href="#">Home</a>
                                <a className="nav-link" href="#">About</a>
                                <a className="nav-link" href="#">Services</a>
                                <a className="nav-link" href="#">Contact</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}