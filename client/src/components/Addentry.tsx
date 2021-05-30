import { configureStore } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import '../App.css';
import { todosReducer } from '../reducers/localReducer';

function AddEntry({store}:any) {

    const Entry = {
        userID: "123456789",
        name: "Marek",
        date: "",
        results: ""
    }
    
    const [entry, setEntry] = useState({userID: "", name: "", date: "", result: ""})
    
    const SaveEntry = (entryDetails:any) => {
        console.log(entryDetails);
        console.log("Saved");
        setEntry({
            userID: entryDetails.userID,
            name: entryDetails.name,
            date: entryDetails.date,
            result: entryDetails.result
        })
        store.dispatch({type: 'ADD_ENTRY', payload: entryDetails})
    }

    const [entryDetails, setEntryDetails] = useState({userID: "", name: "", date: "", result: ""});

    const submitHandler = (e:any) => {

        e.preventDefault();

        SaveEntry(entryDetails);
    }

    return (
        <div>
            {console.log(store.getState())}
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

export default AddEntry;