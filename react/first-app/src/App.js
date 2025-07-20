import Apiex from "./Apiex.js";
import Apiexone from "./Apiexone.js";
import Book from "./Book";
import Counter from "./Counter.js";
import Singer from "./Singer.js";
import Userinfo from "./Userinfo.js";


const App=()=>{
  let name = "karthik";
  let age = "25";
  return (<>
      <h1>Welcome to My First React App</h1>
      <p>This is a simple React application.</p>
      <h2>My name is {name} and I am {age} years old.</h2>
      <Userinfo />
      {/* <Counter > <button>add</button> <button>sub</button> </Counter> */}
      {/* <Book title="Java" price="399.04" author="sam" city="mumbai" pic="../JAVA.png" />
      <Book title="Python" price="499.04" author="john" city="delhi" />
      <Book title="JavaScript" price="599.04" author="doe" city="bangalore" pic="../js.png" />
      <Book title="C++" price="699.04" author="jane" city="chennai" />
      <Book title="C#" price="799.04" author="smith" city="hyderabad" />
      <Book title="Ruby" price="899.04" author="alice" city="pune" />
      <Singer name="A.R. Rahman" album="Dil Se" year="1998" pic="../arrahman.jpg" /> */}
      {/* <Apiex /> */}
      <Apiexone/>
    
  </>);
}
export default App;