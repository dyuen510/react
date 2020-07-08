import React, {Component} from 'react';
import './App.css';
import Person from './components/Person.js';


class App extends Component {

  //the regular way; traditional way
  state = {
    persons: [
      {name:'David', age: 28},
      {name:'Samuel', age:29},
      {name:'King', age:35},
      {name:'Dave', age:22},
    ],
    otherState: 'Some other value'
  }
  
  switchNameHandler = () => {
    // console.log('was clicked')
    this.setState({
      persons: [
        {name:'Davido', age: 28},
        {name:'Samuellian', age:29},
        {name:'Kings', age:35},
        {name:'Dave', age:29},
      ]
    })
  }
  render () {
    return (
      <div>
      <p>Hello world</p>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      <Person name={this.state.persons[3].name} age={this.state.persons[3].age}>My favorite hobbies are singing and dancing!</Person>

      </div>
    )
  }
}

export default App;
