import React, { useState } from 'react'

// react 16.8 can now use hooks

const App = props => {
    // must have two elements
    const [personsState, setPersonsState] = useState({
        persons: [
            { name: 'David', age: 28 },
            { name: 'Samuel', age: 29 },
            { name: 'King', age: 35 },
            { name: 'Dave', age: 22 },
        ],
        otherState: 'Some other value'
    });

    const [otherState, setOtherState] = useState('some other value');
//can have as many useState calls as you want

    const switchNameHandler = () => {
        setPersonsState ({
            persons: [
                {name:'Davido', age: 28},
                {name:'Samuellian', age:29},
                {name:'Kings', age:35},
                {name:'Dave', age:29},
            ]
        })
        
    }

    return (
        <div>
            <p>Hello world</p>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
            <Person name={personsState.persons[3].name} age={personsState.persons[3].age}>My favorite hobbies are singing and dancing!</Person>

        </div>
    )
}
export default App;