import { Component } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      My Todo Application
      <FirstComponenet></FirstComponenet>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
      <ForthComponent></ForthComponent>
    </div>
  );
}

function FirstComponenet() {
  return (
    <div className="First Compoent">First Component</div>
  )
}

function SecondComponent() {
  return (
    <div className='Second Component'>Second Compoent</div>
  )
}

class ThirdComponent extends Component {
  render() {
    return (
      <div className='Third Component'>Third Component</div>
    )
  }
}

class ForthComponent extends Component {
  render() {
    return (
      <div className='Forth Component'>Forth Component</div>
    )
  }
}

export default App;
