import { useLocation } from "react-router-dom"

const ShowPayslip=()=>{
    const data = useLocation()
    const {name, empId, sal, total} = data.state;

    return(<>
        <h1>Payslip</h1>
        <h2>Name: {name}</h2>
        <h2>Employee ID: {empId}</h2>
        <h2>Basic Salary: {sal}</h2>
        <h2>Total Salary: {total}</h2>

    </>)
}
export default ShowPayslip;