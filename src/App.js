// import { Component } from 'react';
import './App.css'; 
import TodoApp from './components/todo/TodoApp'

function App() {
  return (
    <div className="App">
      <TodoApp></TodoApp>
    </div>
  );
}

// {property1: 'value1', 'property2: value2'} - Traditional way
// function PlayWithProps(properties) {
//   console.log(properties)
//   console.log(properties.property1)
//   console.log(properties.property2)
//   return (
//     <div>Props</div>
//   )
// }

//  

export default App;
