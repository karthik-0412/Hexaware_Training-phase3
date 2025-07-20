import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [msg, setMsg] = useState("");
  const [actno, setAct] = useState("");
  const [name, setName] = useState("");
  const [balance, setBalance] = useState("");
  const [type, setType] = useState("");
  const [amt, setAmt] = useState("");
  const [search, setSearch] = useState(null);
  const [users, setUsers] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    showAll();
  }, [flag]);

  const saveData = async () => {
    if (!actno || !name || !balance || !type) {
      setMsg("Please fill all fields before saving.");
      return;
    }

    const data = {
      actno: parseInt(actno),
      name,
      balance: parseFloat(balance),
      type
    };

    try {
      const res = await axios.post("http://localhost:9000/saveData", data);
      setMsg(res.data);
      setFlag(!flag);
    } catch (err) {
      console.error(err);
      setMsg("Error saving data.");
    }
  };

  const RemoveData = async () => {
    if (!actno) {
      setMsg("Please enter account number to remove.");
      return;
    }
    try {
      const res = await axios.delete(`http://localhost:9000/deleteAc/${actno}`);
      setMsg(res.data);
      setFlag(!flag);
    } catch (err) {
      console.error(err);
      setMsg("Error deleting data.");
    }
  };

  const Deposit = async () => {
    if (!actno || !amt) {
      setMsg("Enter account number and amount for deposit.");
      return;
    }
    try {
      const res = await axios.put(`http://localhost:9000/deposit/${actno}/${amt}`);
      setMsg(res.data);
      setFlag(!flag);
    } catch (err) {
      console.error(err);
      setMsg("Error in deposit.");
    }
  };

  const withdraw = async () => {
    if (!actno || !amt) {
      setMsg("Enter account number and amount for withdrawal.");
      return;
    }
    try {
      const res = await axios.put(`http://localhost:9000/withdraw/${actno}/${amt}`);
      setMsg(res.data);
      setFlag(!flag);
    } catch (err) {
      console.error(err);
      setMsg("Error in withdrawal.");
    }
  };

  const searchByAct = async () => {
    if (!actno) {
      setMsg("Enter account number to search.");
      return;
    }
    try {
      const res = await axios.get(`http://localhost:9000/getdataAc/${actno}`);
      setSearch(res.data);
    } catch (err) {
      console.error(err);
      setMsg("Account not found.");
      setSearch(null);
    }
  };

  const showAll = async () => {
    try {
      const res = await axios.get("http://localhost:9000/getUsers");
      setUsers(res.data);
    } catch (err) {
      console.error(err);
      setMsg("Error fetching users.");
    }
  };

  return (
    <div>
      <div className="cont">

        <input type="text" placeholder='Enter account No' onChange={(e) => setAct(e.target.value)} />
        <input type="text" placeholder='Enter name' onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder='Enter balance' onChange={(e) => setBalance(e.target.value)} />
        <input type="text" placeholder='Enter type' onChange={(e) => setType(e.target.value)} />
        <input type="text" placeholder='Enter amount' onChange={(e) => setAmt(e.target.value)} />

        <button onClick={saveData}> Save Data </button>
        <button onClick={RemoveData}> Remove Data </button>
        <button onClick={Deposit}> Deposit </button>
        <button onClick={withdraw}> Withdraw </button>
        <button onClick={searchByAct}> Search by Account Number </button>

        <h1>{msg}</h1>
        {search && (
          <h2>
            acc: {search.actno}, name: {search.name}, balance: {search.balance}, type: {search.type}
          </h2>
        )}

      </div>

      <div className="users-list">
        {users
          .filter(user => user.actno && user.name && user.balance >= 0)
          .map(user => (
            <h3 key={user.actno}>
              {user.actno} - {user.name} - {user.balance}
            </h3>
          ))
        }
      </div>
    </div>
  );
}

export default App;
