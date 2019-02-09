import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: 'Adam'
    }
  }

  render(){
  return (
    <div className="App">
      <h4 className="bg-primary text-white text-center p-2">To Do list</h4>
    </div>
  );}
}

export default App;
