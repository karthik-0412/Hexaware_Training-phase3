import { useDispatch, useSelector } from "react-redux";
import { issueBookdsa, returnBookdsa, issueBookjava, returnBookjava, issueBookdsaN, returnBookdsaN } from "./BookSlice";
import { useState } from "react";
import "./Admin.css";


const Admin = () => {
    const dispatch = useDispatch();
    const { dsa, java } = useSelector((state) => state.book);
    
      let [Qdsa, setQdsa] = useState();

    return (
  <div className="admin-container">
    <h2>Admin Panel</h2>

    <div className="admin-section">
      <input
        type="number"
        placeholder="Enter number of DSA books"
        onChange={(e) => setQdsa(e.target.value)}
      />
      <h3>DSA Books Available: {dsa}</h3>
      <button onClick={() => dispatch(issueBookdsa())}>Issue DSA Book</button>
      <button onClick={() => dispatch(returnBookdsa())}>Return DSA Book</button>
      <button onClick={() => dispatch(issueBookdsaN(Number(Qdsa)))}>Issue DSA Book N</button>
      <button onClick={() => dispatch(returnBookdsaN(Number(Qdsa)))}>Return DSA Book N</button>
    </div>

    <div className="admin-section">
      <h3>Java Books Available: {java}</h3>
      <button onClick={() => dispatch(issueBookjava())}>Issue Java Book</button>
      <button onClick={() => dispatch(returnBookjava())}>Return Java Book</button>
    </div>
  </div>
);
};

export default Admin;
