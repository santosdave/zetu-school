import React from 'react';
import {Link} from 'react-router-dom'
import "../../css/Home.css";
function MainHeader() {
    return (
            <div>
                <header>
                    <div class="container">
                        <nav>
                            <ul>
                                <li class="current">
                                    <Link to="/"> Home </Link>
                                </li>
                                <li class="">
                                    <Link to="/about"> About </Link>
                                </li>
                                <li class="">
                                    <Link to="/contact"> Contact Us </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
    )
}

export default MainHeader
