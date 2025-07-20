import { useParams } from "react-router-dom";

const ShowE=()=>{

    let {itemCode,name,price,quantity,city}=useParams()

    return(<>
    
    <h1> {itemCode}</h1>
    <h1> {name}</h1>
    <h1> {price}</h1>
    <h1> {quantity}</h1>


    </>)
}
export default ShowE;