import React, { useState } from 'react';
import '../App.css';

function LoginForm() {

    const User = {
        userID: "123456789",
        password: "password"
    }

    const [user, setUser] = useState({userID: "", password: ""});
    const [error, setError] = useState("");
    const [details, setDetails] = useState({userID: "", password: ""});

    const submitHandler = (e:any) => {
        e.preventDefault();
    }

    return (
        <div className="login-screen">
            <div className="login-title">
                <h1>CREMS</h1>
            </div>
            <div className="login-title">
                <h3>COVID test results management system</h3>
            </div>

            <form onSubmit={submitHandler}>
                <div className="form-inner">
                    {(error != "") ? ( <div className="error">{error}</div>) : ""}
                    <div className="form-group">
                        <label htmlFor="userID">User ID:</label>
                        <input type="userID" name="userID" id="userID" onChange={e => setDetails({...details, userID: e.target.value})} value={details.userID} />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                    </div>
                    <div>
                        <input type="submit" value="SUBMIT" className="login-submit-button"></input>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;