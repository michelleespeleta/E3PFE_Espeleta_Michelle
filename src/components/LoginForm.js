import React, { useState } from 'react'

function LoginForm({ Login, error }) {
// local details for the form
const [details, setDetails] = useState({name: "", email: "", password: ""});

// method to handle the submit
const submitHandler = e => {
    e.preventDefault();

    Login(details);
}

    // INPUT TYPE: onChange is going to pass through the e event which holds the target value then it'll change
    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                
                {(error != "") ? ( <div className="error">{error}</div> ) : ""}
               
                 <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>
                
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                
                <input type="submit" value="LOGIN"/>
            </div>
        </form>
    )
}

export default LoginForm
