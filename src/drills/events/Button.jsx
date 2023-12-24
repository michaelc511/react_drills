
function Button() {

  // Create a function
  const handleClick = () => alert("OUCH")

  // Function w parameter
  const handleClick2 = (name) => alert(`${name} stop clicking me`)

  // Function w parameter and condition
  let count = 0;
  const handleClick3 = (name) => {
    if (count < 3) {
      count++;
      alert(`${name} you clicked me ${count} time/s`)
    } else {
      alert(`${name} stop clicking me`)
    }
  }

  // function with event argument
  const handleClick4=(e)=>{
    console.log(e);
    e.target.textContent="OUCH";
  }

  return (
    <>
      <button onClick={handleClick}>Click Me1</button>
      <br></br>
      <button onClick={() => handleClick2("Bro")}>Click Me2</button>
      <br></br>
      <button onClick={() => handleClick3("Bro")}>Click Me3</button>
      <br></br>
      <button onClick={(e) => handleClick4(e)}>Click Me4</button>
      <br></br>
      <button onDoubleClick={(e) => handleClick4(e)}>Click Me Double 4</button>


      <br></br>
    </>
  )
}

export default Button