import './App.css';
import CardList from './CardList';
//import robots from './robots';
import SearchBox from './SearchBox';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [robots, setrobots] = useState([])
  const [loading, setloading] = useState(true)
  
  const [searchfield, setsearchfield] = useState('') //Setting a use state
  const onSearchChange = (e) => { // function so that the searchfield which has been assigned to an empty string gets set state as e.target.value which is what is being typed
    setsearchfield(e.target.value)
    console.log(e.target.value)
}

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json())
  .then((users) => {
    setrobots(users)
    console.log(users)
    setloading(false)
  })
}, [])

  
  const filteredRobots = robots.filter((robot) => robot.name.toLowerCase().includes(searchfield.toLowerCase())) // Filtering the robots
  console.log(filteredRobots)
  

  if (loading) {
    return <h1>Loading</h1>;
  } else {
    return (
      <div className="App">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange}></SearchBox>
        <CardList robots={filteredRobots}></CardList>
      </div>
    );
  }
}

export default App;

// So this is our Main App.js
//Looking at the Card lines <card = the component which is coded in a seprate area. It provides information through props. so that in the Card component the information can be used.
//in this component robots is imported so it has access to all that data
// This data is read and id is provided via props to the card component.
// id={robots[0].id} = syntax =
//name = {}since we are accessing JS we use curly braces and we are referencing the robots file which is an array
//in this case robots[position in the array].id the .id is a specifc key which has a value = key value pair

//we can also destructure out props so we dont need to use the syntax of props.key
// we do this by the below
//const = { prop1, prop2, prop3 } = props;
//to then acccess props = prop1

//We are rendering the component CardList - however we are passing it the props robots which is = to the array of robots