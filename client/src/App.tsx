import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm'
import AddEntryPage from './pages/AddEntryPage'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import LogoutPage from './pages/LogoutPage'
import TestsPage from './pages/TestsPage';
import MyTestsPage from './pages/MyTestsPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './reducers/localReducer';

const store = configureStore({
  reducer: {
      entries:todosReducer
  },
})

function App() {

  return (
    <Router>
      <div>

        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/logout">
            <LogoutPage />
          </Route>
          <Route path="/addentry">
            <AddEntryPage store={store}/>
          </Route>
          <Route path="/tests">
            <TestsPage store={store}/>
          </Route>
          <Route path="/mytests">
            <MyTestsPage store={store}/>
          </Route>
          <Route path="/" exact>
            <IndexPage />
          </Route>
        </Switch>


      </div>
    </Router>
  );
}

export default App;
