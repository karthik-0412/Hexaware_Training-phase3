import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Payslip = () => {
  const navigate = useNavigate();  
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [basic, setBasic] = useState('');

  const handleSubmit = () => {
    navigate("/showpayslip", { state: { name, id, basic: Number(basic) } });
  };

  return (
    <div>
      <h2>Payslip Calculator</h2>
      <input type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Enter ID" onChange={(e) => setId(e.target.value)} />
      <input type="number" placeholder="Enter Basic Salary" onChange={(e) => setBasic(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Payslip;
