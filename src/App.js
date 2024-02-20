import { Component } from 'react';
import './App.css'; 
import Counter from './components/learning-examplex/counter/Counter';

function App() {
  return (
    <div className="App">
     <Counter by="1"></Counter>
     <Counter by="2"></Counter>
     <Counter by="6"></Counter>
     <PlayWithProps property1="prop1" property2="prop2"></PlayWithProps>
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

function PlayWithProps({property1, property2}) {
  console.log(property1)
  console.log(property2)
  return (
    <div>Props</div>
  )
}

export default App;
