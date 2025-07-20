import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PayslipCalculator=()=>{

    const[name, setName]=useState("")
    const[empId, setEmpId]=useState("")
    const[salary, setSalary]=useState("")
    const nav = useNavigate()

    const submit=()=>{
        let sal = parseFloat(salary);
        let bonus = sal > 5000 ? sal * 0.1 : sal * 0.05;
        let total = sal + bonus;

        nav("/showpayslip", {state: {name,empId,sal,total}})
    }

    return(<>

    <h1>Payslip Calculator</h1>
    <input type="text" placeholder="enter name" onChange={(e)=> setName(e.target.value)} /><br />
    <input type="text" placeholder="enter id" onChange={(e)=> setEmpId(e.target.value)} /><br />
    <input type="text" placeholder="enter basic salary" onChange={(e)=> setSalary(e.target.value)} /><br />
    <button onClick={submit}>Submit</button>
    
    </>)
}
export default PayslipCalculator;