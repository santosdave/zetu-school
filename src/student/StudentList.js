import React from 'react';
import {Link} from "react-router-dom";
function StudentList() {
    return (
        <div>
           <h3> Students </h3>
           <table className="table table-striped" style={{marginTop: 20}}>
                    <thead>
                    <tr>
                        <th> student Name</th>
                        <th> student ID</th>
                        <th> Email</th>
                        <th> Password</th>
                        <th> Adm number</th>
                        <th> Course</th>
                        <th> Action</th>
                    </tr>
                    </thead>
                    <tbody> 
                    <tr>
                        <td> student Name</td>
                        <td> student ID</td>
                        <td> Email</td>
                        <td> Password</td>
                        <td> Adm number</td>
                        <td> Course</td>
                        <td>
                            <Link
                                to={"/update/" }
                                className=" btn btn-warning"
                                style={{fontSize: "15px", width: "100px"}}
                            >
                                <span> edit</span>
                            </Link>
                            {"  "}
                            <Link
                                to={"/delete/"}
                                className="btn btn-danger"
                                style={{fontSize: "15px", width: "100px"}}
                            >
                                <span> delete</span>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td> student Name</td>
                        <td> student ID</td>
                        <td> Email</td>
                        <td> Password</td>
                        <td> Adm number</td>
                        <td> Course</td>
                        <td>
                            <Link
                                to={"/update/" }
                                className=" btn btn-warning"
                                style={{fontSize: "15px", width: "100px"}}
                            >
                                <span> edit</span>
                            </Link>
                            {"  "}
                            <Link
                                to={"/delete/"}
                                className="btn btn-danger"
                                style={{fontSize: "15px", width: "100px"}}
                            >
                                <span> delete</span>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td> student Name</td>
                        <td> student ID</td>
                        <td> Email</td>
                        <td> Password</td>
                        <td> Adm number</td>
                        <td> Course</td>
                        <td>
                            <Link
                                to={"/update/" }
                                className=" btn btn-warning"
                                style={{fontSize: "15px", width: "100px"}}
                            >
                                <span> edit</span>
                            </Link>
                            {"  "}
                            <Link
                                to={"/delete/"}
                                className="btn btn-danger"
                                style={{fontSize: "15px", width: "100px"}}
                            >
                                <span> delete</span>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td> student Name</td>
                        <td> student ID</td>
                        <td> Email</td>
                        <td> Password</td>
                        <td> Adm number</td>
                        <td> Course</td>
                        <td>
                            <Link
                                to={"/update/" }
                                className=" btn btn-warning"
                                style={{fontSize: "15px", width: "100px"}}
                            >
                                <span> edit</span>
                            </Link>
                            {"  "}
                            <Link
                                to={"/delete/"}
                                className="btn btn-danger"
                                style={{fontSize: "15px", width: "100px"}}
                            >
                                <span> delete</span>
                            </Link>
                        </td>
                    </tr>
                    </tbody>
                </table>
        </div>
    )
}

export default StudentList
