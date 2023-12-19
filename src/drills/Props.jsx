
function Child(){
	return(
		<div>
			Name:  
		</div>
	)	
}

export function Parent(){
	let name = "Larry"
	return (
		<Child  />
	)
}

export function Props(){

	return(
		<>
		<div>Props Example</div>
		</>
	)

}

/*

1 - Pass a prop 'name' from the Parent component to the child component

2 - The same as 1 but use JS Desctructing. 

*/