import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: true
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    } )
  }

  deletePersonHandler = (personIndex) => {
    // copy array
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    
    // remove element from array
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }
  togglePersonHandler = () =>
  {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }
  render () {

    // inline style
    const style = {
      backgrounColor:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((p, index)=>{
              return <Person 
                    click= {() => this.deletePersonHandler(index)}
                    name={p.name} age={p.age}/>
          })}


          
         </div> 
      )
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        
        
        <button 
          style={style}
          onClick={this.togglePersonHandler}>Switch Name</button>
        
        
          {persons}
        
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
