import "../App.css"

function Child(props){
	return(
		<div>
			Name: {props.firstName}
		</div>
	)	
}

function Child2({firstName, lastName}){
	return(
		<div>
			Full name: {firstName} {lastName}
		</div>
	)
}

export function Child3({firstName, lastName, sayHello}){
	return(
		<div className="child">
			{sayHello(firstName, lastName)}
		</div>
	)

}

export function Parent(){
	let firstName = "Larry"
	let lastName = "Watson"

	function sayHello(firstName, lastName){
		 return "Hello " + firstName + " " + lastName;
	}

	return (
		<div className="parent">
		<Child firstName={firstName} />
		<Child2 firstName={firstName} lastName={lastName} />
		<Child3 firstName={firstName} lastName={lastName} sayHello={sayHello}/>
	</div>
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

1 - Pass a prop 'firstName' from the Parent component to the child component

2 - The same as 1 to Child2 but now pass a last name and use JS Desctructing.

3 - Now pass a first & last name and a function to Child3. Use JS Desctruting. 

*/