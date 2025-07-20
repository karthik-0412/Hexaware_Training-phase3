import { useNavigate } from "react-router-dom"

const Contact=()=>{

const nav = useNavigate()

    const openSignIn=()=>{
        nav("/Login")
    }
    return(<>

    <h1>Contact</h1>
    <h2>gayathri@example.com</h2>
    <h2>866726347</h2>

    <button onClick={openSignIn}> Sign In</button>
    
    </>)
}
export default Contact