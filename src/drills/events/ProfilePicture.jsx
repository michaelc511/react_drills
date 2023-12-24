 
function ProfilePicture(){
  const imageUrl = './src/assets/react.svg';

  const handleClick6 = () =>{
    alert("OUCH")
  }

  const handleClick7 = (e) =>{
    e.target.style.display = "none"
  }

  return(
    <>
    <img onClick={handleClick6} src={imageUrl}></img>

    <br></br>
    <img onClick={(e)=> handleClick7(e)} src={imageUrl}></img>
    </>
  )
}

export default ProfilePicture