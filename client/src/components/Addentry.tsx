import React, { useState } from 'react';
import '../App.css';

function Addentry( SaveEntry:any ) {

    const [entryDetails, setEntryDetails] = useState({userID: "", name: "", date: "", result: ""});

    const submitHandler = (e:any) => {

        e.preventDefault();

        SaveEntry(entryDetails);
    }

    return (
        <div>
            <nav id="sidebarMenu" className="sidebar">
                <div className="logo">
                    <a><b>CREMS</b></a>
                </div>
                <div className="sidebar-flex">
                    <div className="link-wrap">Add Entry</div>
                    <div className="link-wrap">Tests</div>
                    <div className="link-wrap">My Tests</div>
                    <div className="link-wrap">Statistics</div>
                </div>
            </nav>

            <div className="add-entry-form">
                <form onSubmit={submitHandler}>
                    <div className="form-inner">
                        <div className="form-group">
                            <label htmlFor="userID">User ID:</label>
                            <input type="userID" name="userID" id="userID" onChange={e => setEntryDetails({...entryDetails, userID: e.target.value})} value={entryDetails.userID} />
                        </div>
                        <div>
                            <label htmlFor="date">Date:</label>
                            <input type="date" name="date" id="date" onChange={e => setEntryDetails({...entryDetails, date: e.target.value})} value={entryDetails.date}/>
                        </div>
                        <div>
                            <label htmlFor="result">Result:</label>
                            <input type="result" name="result" id="result" onChange={e => setEntryDetails({...entryDetails, result: e.target.value})} value={entryDetails.result}/>
                        </div>
                        <div>
                            <input type="submit" value="SUBMIT" className="login-submit-button"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Addentry;