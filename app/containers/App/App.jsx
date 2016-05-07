import React, { Component } from 'react';
// import './App.css';
import { SearchGithub } from '../../components';

console.log( __DEV__ );

// class App extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//   return (
//     <div>
//       <p> content from App Component </p>
//       {this.props.children}
//     </div>
//   );
//  }
// }
const App = ({children, history}) => {
  return (
       <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
            <SearchGithub history={history}/>
          </div>
        </nav>
        <div className="container">
          {children}
        </div>
      </div>
    )
}

export default App;
