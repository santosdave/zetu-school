import React from 'react';
import {Link, useHistory} from 'react-router-dom';

function StudentSignIn() {
    const history = useHistory();
    onsubmit=(e)=>{
        history.push("/studentDashboard");
    }
    return (
        <div>
           <h2 align="center">Student Login</h2><br/>
           <div align="center" className="">
               <form className="">
                   <div className="form-group col-7 form">
                    <label htmlFor="exampleInputEmail1">
                        <b>Student ID</b>
                    </label>
                    <input 
                    type="text" 
                    className="form-control"
                    id="studentId"
                    aria-describedby="emailHelp"
                   /*  value={this.state.adminID}
                    onChange={this.onChangeID} */
                    placeholder="Student ID"
                    
                    />
                   </div>
                   <div className="form-group col-7 form">
                    <label htmlFor="exampleInputPassword1">
                        <b>Password</b>
                    </label>
                    <input 
                        type="password" 
                        className="form-control"
                        id="password"
                        
                    /*  value={this.state.adminID}
                        onChange={this.onChangeID} */
                        placeholder="Password"
                    
                    />
                   </div>
                   <button type="submit" className="btn btn-primary form">
                        Login
                    </button>
                    <div className="text-primary text-center">
                        Don't have an account? <Link to="/studentSignUp">Sign Up</Link>
                    </div>
               </form>
           </div>
        </div>
    )
}

export default StudentSignIn
