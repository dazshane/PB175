import React, { useState } from 'react';
import '../App.css';

function Tests({store}:any) {
    return (
        <div>
            {console.log(store.getState())}
            <div className="add-entry-form">
                {store.getState().entries.map((s:any) => 
                <div className="tests-output">
                    <p>{s.userID}</p>
                    <p>{s.date}</p>
                    <p>{s.result}</p>
                </div>
                )}
            </div>
        </div>
    )
}

export default Tests;