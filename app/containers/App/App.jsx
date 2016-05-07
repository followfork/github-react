import React, { Component } from 'react';
import './App.css';

console.log( __DEV__ );

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  return (
    <div>
      <p> content from App Component </p>
      {this.props.children}
    </div>
  );
 }
}

export default App;
