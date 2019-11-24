import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  
  timeout(){
    setTimeout(alert, 2000);
  }
  componentDidMount(){
   
    alert("Hello world");
  }
  UNSAFE_componentWillMount()
  {
    alert("Goodbye");
  }
  render(){

   return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
  }
}


