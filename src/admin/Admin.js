import React from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";
import {redirect} from "../utils/utils";

function Admin() {
    return (
        <div className="container">
                <Router>
                    <div>
                        <div style={{marginTop: 20}}>
                            <center>
                                <div className="card mb-3" style={{width: "700px"}}>
                                    <div style={{width: "700px"}}>
                                        <div className="card-header">
                                            <b>
                                                <h3> Admin Dashbord </h3>
                                            </b>
                                        </div>
                                        <div className="çard-body"/>
                                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand"
                           href="http://courseweb.sliit.lk/"
                           target="_blank"
                        >
                        </a>

                        <Link to="/studentlist" className="navbar-brand">
                            Student Management
                        </Link>

                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="navbar-item">
                                    <Link to="/studentlist" className="nav-link">
                                        Manage Student
                                    </Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/addstudent" className="nav-link">
                                        Add Student
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </nav>
                                    </div>
                                </div>
                            </center>
                        </div>
                    </div>
                </Router>
            </div>
    )
}

export default Admin
