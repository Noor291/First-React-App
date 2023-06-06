import './App.css';
import ClassComponent from './pages/ClassComponent';
import FunctionalComponent from './pages/FunctionalComponent';
import { useState } from 'react';
import {Routes,Route} from "react-router-dom";

function App() {
  const branch='CSE';
  const[name,setName]=useState("Noor");

  return (
     <Routes>
      <Route path="/" element={
        <ClassComponent/>
      }/>
       <Route path='/functional-component' element={
          <FunctionalComponent name={name} age={20} branch={branch} setName={setName}/>
      } />
     </Routes>
  );
}

export default App;