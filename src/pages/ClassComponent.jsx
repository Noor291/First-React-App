import React from "react";
import '../App.css'
import BaseHoc from "../components/BaseHoc";

class ClassComponent extends React.Component{
    render() {
        return (
            <div className="App-header">
                <h1>Class Component</h1>
                <p>This is Class Component</p>
            </div>
        );
    }
}

export default BaseHoc(ClassComponent);