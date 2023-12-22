function UserGreeting(props) {

  // if (props.isLoggedIn) {
  //   return (
  //     <h2>Welcome {props.userName}</h2>
  //   )
  // }
  // else {
  //   return (
  //     <h2>Please log in</h2>
  //   )
  // }

  /*
  Tenary 
  */
  return(props.isLoggedIn ? 
    <h3>Welcome {props.userName} using Tenary</h3> : 
    <h3>Please log in</h3>);

}

export default UserGreeting