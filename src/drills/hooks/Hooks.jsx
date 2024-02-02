import { useState, useEffect } from "react";

/*
  Basic Hooks Rules
  1. Use a hook outside of a func body (render func)
  2. Use a hook inside of another hook. You can access and set it but not initialize it
  3. Use a hook inside of an event handler
*/

// 1. Use a hook outside of a func body (render func)
// will not work as it is outside the func comp body
// uncomment this to see the error
// const [name, setName] =
//   useState("John");

const Hooks = () => {
  const [name, setName] = useState("John");

  useEffect(() => {
    // 2. Use a hook inside of another hook. You can access and set it but not initialize it
    // will not work as it is inside the useEffect
    // uncomment this to see the error
    //const [name, setName] =
     // useState("John");
    //setName("Jane");
  }, []);

  function clickHandler() {
    // 3. Use a hook inside of an event handler. You can access and set it but not initialize it
    // will not work as it is inside the clickHandler, 
    // uncomment this to see the error
    // const [lastName, setLastName] =
    // useState("Davidson");
    setName("Jerry");
  }

  return (
    <h2 className="App">
      Invalid and Valid Hooks {name}
      <p></p>
      <button onClick={clickHandler}>Click me</button>
    </h2>
  );
};

export default Hooks;