import "./App.css";

const Singer=({name,album,year,pic})=> {
    return (
        <div className="container">
            <h1>Singer</h1>
            <p>Welcome to the Singer component!</p>
            <h2>Name: {name}</h2>
            <p>Album: {album}</p>  
            <p>Year: {year}</p>
            <img src={pic} alt={name} />
        </div>
    );
}
export default Singer;