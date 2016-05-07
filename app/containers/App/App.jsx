import React, { Component } from 'react';
import { MyComponent } from '../../components';

import './App.css';

console.log( __DEV__ );

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MyComponent />
        <p>
          containers
        </p>
      </div>
    );
  }
}

export default App;
