import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavigationBar = () => {

    const navigate = useNavigate()

    const logout = () => {

        localStorage.removeItem("token")
        localStorage.removeItem("userId")

        navigate("/")

    }

    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <div className="container-fluid">

                    <Link className="navbar-brand" to="/create">
                        Blog App
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav ms-auto">

                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Sign In
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/signup">
                                    Sign Up
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/create">
                                    Create Post
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/viewall">
                                    View All
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/viewmypost">
                                    My Posts
                                </Link>
                            </li>

                            <li className="nav-item">
                                <button
                                    className="btn btn-danger ms-2"
                                    onClick={logout}
                                >
                                    Logout
                                </button>
                            </li>

                        </ul>

                    </div>

                </div>

            </nav>

        </div>
    );
};

export default NavigationBar;