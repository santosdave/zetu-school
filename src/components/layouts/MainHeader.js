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
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
    )
}

export default MainHeader
