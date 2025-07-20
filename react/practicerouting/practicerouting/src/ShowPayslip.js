import React from 'react';
import { useLocation } from 'react-router-dom';

const ShowPayslip = () => {
  const location = useLocation();
  const { name, id, basic } = location.state;

  const bonusRate = basic <= 5000 ? 0.05 : 0.10;
  const bonus = basic * bonusRate;
  const total = basic + bonus;

  return (
    <div>
      <h2>Show Payslip</h2>
      <p>Name: {name}</p>
      <p>ID: {id}</p>
      <p>Basic Salary: {basic}</p>
      <p>Bonus: {bonus.toFixed(2)}</p>
      <p>Total Salary: {total.toFixed(2)}</p>
    </div>
  );
};

export default ShowPayslip;
