const ECard=({itemCode,name,price,quantity,city})=>{

    return(<div className="cont">

    <h1> {itemCode}</h1>
    <h2> {name}</h2>
    <h2> {price}</h2>
    <h2> {quantity}</h2>
    <h2> {city}</h2>
    
    </div>)
}
export default ECard