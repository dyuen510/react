import React, {Component} from 'react';
import './App.css';
import Person from './components/Person.js';


class App extends Component {
  render () {
    return (
      <div>
      <p>Hello world</p>
      <Person name='david' age='29'/>
      <Person name='samuel' age='29'/>
      <Person name='King' age='35'/>
      <Person name = 'Singler' age ='40'>My favorite hobbies are singing and dancing!</Person>

      </div>
    )
  }
}

export default App;
