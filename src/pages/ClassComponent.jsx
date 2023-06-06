import React from "react";
import '../App.css'
import BaseHoc from "../components/BaseHoc";

class ClassComponent extends React.Component{
    constructor(props){
        super(props);

        this.state={
            name:"Noor",
            age:20,
        }
        console.log("Constructor:")
    }

    componentDidMount(){
        console.log("Component did mount:")
    }
    componentDidUpdate() {
        console.log("Component Did Update?");
      }
    
      componentWillUnmount() {
        console.log("Component Did Unmount");
      }
    
    render() {
        console.log("Render: ");
        return (
            <div className="App-header">
                <h1>Class Component</h1>
                <p>This is Class Component</p>
                <button onClick ={()=>this.setState({
                    ...this.state,
                    age:this.state.age +1,
                })}>Add 1 to age</button>
                <h1>{this.state.age}</h1>
            </div>
        );
    }
}

export default BaseHoc(ClassComponent);