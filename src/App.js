import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
import { useState } from 'react';
function App() {
  const branch='CSE';
  const[name,setName]=useState("Noor");
  return (
    <div className="App">
      <header className='App-header'>
      <h1>Class Component</h1>
      <ClassComponent></ClassComponent>
      <br />
      <h1>Functional Component</h1>
      <FunctionalComponent name={name} age={20} branch={branch} setName={setName}></FunctionalComponent>
      </header>
      </div>
  );
}

export default App;
