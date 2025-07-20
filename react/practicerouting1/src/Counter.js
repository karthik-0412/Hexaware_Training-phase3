import { Component } from "react";

class Counter extends Component{

    constructor(){
        super()

        this.state={
            age:21,
            name:"gayathri",
            c:0,
            flag:false
        }
        console.log("i am constructor")
    }

    changeName=()=>{
        this.setState({name:"divya"})
        this.setState({flag:true})
    }

    componentDidMount=()=>{
        console.log("api calling")
    }

    componentDidUpdate=()=>{
        console.log("name changes")
    }

    componentWillUnmount=()=>{
        console.log("removing component")
    }

    add=()=>{
        this.setState({c:this.state.c+1})
    }

    subtract=()=>{
        this.setState({c:this.state.c-1})
    }

    render(){

        console.log("i am render method")
        return(<>

        {this.state.flag==true? <h1>Hello</h1>:<h2>Bye</h2>}
        <h1>Welcome {this.state.name}</h1>
        <button onClick={this.changeName}> change name</button>
        <h1>{this.state.c}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.subtract}>Subtract</button>

        </>)
    }
}
export default Counter;