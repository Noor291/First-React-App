import React,{useState} from "react";
import '../App.css'
import BaseHoc from "../components/BaseHoc";
import { useEffect ,useRef} from "react";
//function FunctionalComponent()

const FunctionalComponent=(props/*{name,age,branch,setName}*/)=>{
    //const{name,age,branch,setName}=props;
    const [count,setCount] =useState(0);
    const[nameData,setnameData]=useState();
    const { name, age, branch, setName } = props
    const prevRef=useRef();

    useEffect(()=>{
        console.log("Component did mount")
    },[])

    useEffect(()=>{
        console.log("Component did update")
    })
    
    useEffect(()=>{
        console.log("props Changed")
    },[props])
 
    // useEffect(()=>{
    //     console.log(prevRef.current.innerHTML === count)
    // },[count])
    
    return(
        <div className="App-header">
            <h1>Functional Component</h1>
            <p>This is a Functional Component</p>
            <button onClick={()=>setCount(count+1)}>
                Click me to add 1 
            </button>
            <button onClick={()=>setCount(count-1)}>
                Click me to subtract 1 
            </button>
            {/* <p ref={prevRef}>{count}</p>  */}
            <p>{count}</p>
            <p>My name is {name}. I am {age}. I study {branch}.</p>
            <input onChange={(e)=>setnameData(e.target.value)}/>
            <button onClick={()=>setName(nameData)}>Change Name</button>
            <br/>
            <button onClick={()=>setName("Noordeep Kaur")}>Change to Full Name</button>
        </div>
    )
}

export default BaseHoc(FunctionalComponent);