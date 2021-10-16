import React from 'react';
import { useHistory} from 'react-router-dom';

function AdminSignIn() {
    const history = useHistory();
    onsubmit=(e)=>{
        history.push("/admin");
    }
    return (
        <div>
           <h2 align="center">Admin Login</h2><br/>
           <div align="center" className="">
               <form className="">
                   <div className="form-group col-7 form">
                    <label htmlFor="exampleInputEmail1">
                        <b>Admin ID</b>
                    </label>
                    <input 
                    type="text" 
                    className="form-control"
                    id="adminId"
                    aria-describedby="emailHelp"
                   /*  value={this.state.adminID}
                    onChange={this.onChangeID} */
                    placeholder="Admin ID"
                    
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
                    
               </form>
           </div>
        </div>
    )
}

export default AdminSignIn
