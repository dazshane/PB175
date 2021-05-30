import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import LoginForm from '../components/LoginForm';

export default LoginPage;

  function LoginPage() {
      return (
        <div>
            <LoginForm />
        </div>
      )
  }