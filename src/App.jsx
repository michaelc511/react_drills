import { useState } from 'react'

// Drills

import './App.css'

function countInitial() {
  console.log('run function');
  return 4;
}

function App() {
  // 1 - Create a state variable called count and set it to 4
  const [count, setCount] = 
                    //useState(4); // will run everytime page is rendered
                    useState(countInitial);
                    // useState(() => { // func to make sure it runs 1x
                    //   console.log('run function');
                    //   return 4;
                    // });

  // 2 create a state named 'state' and set it with count and theme as properties
  const [state, setState] = useState({ count: 4, theme: 'blue' });
  const counts = state.count;
  const theme = state.theme;

  // 3 Best way to use 'count' and 'theme' as separate state variables

  const decrementCount = () => {
    // ex 1
    // Decrement the count by 1 
    // setCount(count - 1); // 
   
    // ex 2
    // use setCount with a function instead.
    // setCount(prevCount => prevCount - 1); 
  
    // ex 3 w obj
    // setState( prevState =>  {  // this will work only for count not the theme because we are overriding the obj
    //   return { count: prevState.count - 1  }
    // })

    // ex 4 w obj using spread
    setState( prevState =>  {  // this will work only for count and use prev state to merge obj w theme
      return { ...prevState, count: prevState.count - 1 } // spread operator will retain the color
    })
  }

  // Increment the count by 1 with a function
  const incrementCount = () => {  
    // setCount(prevCount => prevCount + 1); //  
  }



  return (
    <div className='app'>
      <div className='counter'>
        <button onClick={decrementCount }>-</button>
        <span>{counts} </span>
        <span>{theme}</span>
        <button onClick={incrementCount}>+</button>
      </div>
     </div>

  )
}

export default App

/*
// Branch name_#_desc
  1. Git: https://github.com/WebDevSimplified 
  2. Vid: https://youtu.be/O6P86uwfdR0?si=x-uMTA-EIyWbLPMp
  3. Blog: https://blog.webdevsimplified.com/2020-04/use-state/
  4. Solutions:  
  We have 4 examples of using state. The first is with a value which runs
  every time the page is rendered. The second is with a function which runs 
  only once. 
  The third is with an object which overrides the previous state  
  The fourth is with an object which merges the previous state.
  5. Notes:
  - useState is a hook that allows us to use state in a functional component
  - useState returns an array with 2 elements
  - The first element is the current value of the state
  - The second element is a state setter function to update the state
  - useState can only be called directly inside of a functional component
  - useState can be called multiple times for multiple different state variables
  - The state variable doesn't have to be an object
  - The state setter function does not automatically merge update objects
  - The state setter function does not automatically shallow merge update objects
  - The state setter function does not automatically remove old properties
  - The state setter function is asynchronous
  - The state setter function accepts a callback function
  - The state setter function callback function runs after the state has been updated
  - The state setter function callback function has access to the previous state
  - The state setter function callback function does not have access to the current state
  - The state setter function callback function can be called conditionally
  - The state setter function callback function can be called multiple times
  - The state setter function callback function can be called synchronously

*/