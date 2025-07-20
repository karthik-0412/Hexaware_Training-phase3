import React from 'react';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import AddBook from './components/AddBook';
import RemoveBook from './components/RemoveBook';
import IssueBook from './components/IssueBook';
import ReturnBook from './components/ReturnBook';
import Routes1 from './Routes1';
import { Routes, Route } from 'react-router-dom';
// import './App.css';


const App = () => {
  return (
    <div>
      {/* <h1>📖 Library Management System</h1> */}
      <Routes1 />
      
      
    </div>
  );
};

export default App;
