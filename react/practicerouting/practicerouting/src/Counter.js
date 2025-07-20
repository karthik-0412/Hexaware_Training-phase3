import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();


    this.state = {
      age:21,
      name: "John Doe",
      count :0,
   };
    console.log("i am  constructor ")
  }
  add = () => {
        this.setState({ count: this.state.count + 1 });
    };
    
    sub = () => {
        this.setState({ count: this.state.count - 1 });
    };
changeName=()=>
    {
        this.setState({name:"karthik"})
    }
    componentDidMount=()=>
        {
 
            console.log("api calling ")
        }
            componentDidUpdate=()=>
        {
 
            console.log("name changes ")
        }
          componentWillUnmount=()=>
        {
console.log("removing component ")
        }
  

  render() {
    console.log("i am render method")
    return (<>
    {this.state.flag==true? <h1> Hello</h1>:<h2>Bye </h2>}
      <h1>Welcome {this.state.name}</h1>
      <button onClick={this.changeName}> change name </button>
      <h1>Counter: {this.state.count}</h1>
            <button onClick={this.add}>Add</button>
            <button onClick={this.sub}>Subract</button>
    </>);
  }

}
export default Counter;
