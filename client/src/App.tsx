import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm'

function App() {
  const User = {
    userID: "123456789",
    password: "password"
  }

  const Entry = {
    userID: "123456789",
    name: "Marek",
    date: "",
    results: ""
  }

  const [user, setUser] = useState({userID: "", password: ""});
  const [error, setError] = useState("");
  const [entry, setEntry] = useState({userID: "", name: "", date: "", result: ""})

  const Login = (details:any) => {
    console.log(details);

    if (details.userID == User.userID && details.password == User.password) {
      console.log("Logged in");
      setUser({
        userID: details.userID,
        password: details.password
      })
    } else {
      console.log("Details do not match!");
    }
  }

  const Logout = () => {
    setUser({userID: "", password: ""});
  }

  const SaveEntry = (entryDetails:any) => {
    console.log(entryDetails);
    console.log("Saved");
    setEntry({
      userID: entryDetails.userID,
      name: entryDetails.name,
      date: entryDetails.date,
      result: entryDetails.result
    })
  }

  return (
    <div>
      {(user.userID != "") ? (
        <div>

          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;
