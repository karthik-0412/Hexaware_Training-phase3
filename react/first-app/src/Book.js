import "./App.css"

 

const Book = ({title, price ,author , city, pic}) => {
//     let title = "Ramayana";
//     let author ="Valmiki";    
// let year = "500 BC";
  return (
    <div className="container">
      <h2>Name: {title}</h2>
      <p>Author: {author}</p>
      <p>Price: {price}</p>
    <img src={pic} alt={title} />
      <p>City: {city}</p>
    </div>
  );
}
export default Book;