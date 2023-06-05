import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
function App() {
  return (
    <div className="App">
      <header className='App-header'>
      <h1>Class Component</h1>
      <ClassComponent></ClassComponent>
      <br />
      <h1>Functional Component</h1>
      <FunctionalComponent></FunctionalComponent>
      </header>
      </div>
  );
}

export default App;
