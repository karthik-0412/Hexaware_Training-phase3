import React from 'react';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import AddBook from './components/AddBook';
import RemoveBook from './components/RemoveBook';
import IssueBook from './components/IssueBook';
import ReturnBook from './components/ReturnBook';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Routes1=()=> {
 
 
    return(
    <div>
     <table border="2">
        <tr>
            <Link to="/"><td>Home</td></Link>
            <Link to="/signin"><td>Sign In</td></Link>
            <Link to="/signup"><td>Sign Up</td></Link>
            <Link to="/dashboard"><td>Dashboard</td></Link>
            <Link to="/addbook"><td>Add Book</td></Link>
            <Link to="/removebook"><td>Remove Book</td></Link>
            <Link to="/issuebook"><td>Issue Book</td></Link>
            <Link to="/returnbook"><td>Return Book</td></Link>
        </tr>
      </table>
    
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/removebook" element={<RemoveBook />} />
        <Route path="/issuebook" element={<IssueBook />} />
        <Route path="/returnbook" element={<ReturnBook />} />
    </Routes>
    
    </div>
    );

}
export default Routes1;