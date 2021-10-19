import React from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";
import "./css/Home.css";
import {redirect} from "./utils/utils";

import studentImg from "./img/zetu-student.jpg";
import teacherImg from "./img/zetu-teacher.jpg";
import parentImg from "./img/zetu-parent.jpg"
import adminImg from "./img/adminImg.jpg";

function Home() {
    return (
        <Router>
            <div>
                <section id="showcase">
                    <div class="container">
                        <h1>Welcome to Zetu Management System</h1>
                    </div>
                </section>
                <section id="boxes">
                        <div class="container">
                            <div class="box">
                                <img src={studentImg} alt="student" width="500" height="100"/>
                                <h3>
                                    <Link onClick={() => redirect('/studentSignIn')}> Student </Link>
                                </h3>
                               
                            </div>
                            <div class="box">
                                <img src={teacherImg} alt="teacher " width="500" height="100"/>
                                <h3>
                                    <Link onClick={() => redirect('/teacherSignIn')}> Teacher </Link>
                                </h3>
                                
                            </div>
                            <div className="box">
                                <img src={parentImg} alt="parent" width="500" height="100"/>
                                <h3>
                                    <Link onClick={() => redirect('/parentSignIn')}> Parent </Link>
                                </h3>
                                
                            </div>
                            <div class="box">
                                <img src={adminImg} alt="admin" width="500" height="100"/>
                                <h3>
                                    <Link onClick={() => redirect('/adminSignIn')}> Admin </Link>
                                </h3>
                               
                            </div>
                        </div>
                    </section>
            </div>
        </Router>
    )
}

export default Home
