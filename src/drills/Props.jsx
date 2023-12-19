import "../App.css"

function Child(props){
	return(
		<div>Child 1 - 
			Full Name: {props.firstName}
		</div>
	)	
}

function Child2({firstName, lastName}){
	return(
		<div>Child 2 - 
			Full name: {firstName} {lastName}
		</div>
	)
}

export function Child3({firstName, lastName, sayHello}){
	return(
		<div className="child">Child 3 - 
			{sayHello(firstName, lastName)}
		</div>
	)

}

export function Child4({firstName, lastName, sayHello, isPro}){
	return(
		<div className="child">Child 4 - 
			{sayHello(firstName, lastName)}
			<br/>{isPro? "You are a pro!" : "You are not a pro!"} 
		</div>
	)

}

export function Parent(){
	let firstName = "Larry"
	let lastName = "Watson"

	let isPro = true;

	function sayHello(firstName, lastName){
		 return "Hello " + firstName + " " + lastName + "! ";
	}

	return (
		<div className="parent">
		<Child firstName={firstName} />
		<Child2 firstName={firstName} lastName={lastName} />
		<Child3 firstName={firstName} lastName={lastName} sayHello={sayHello}/>
		<Child4 firstName={firstName} lastName={lastName} sayHello={sayHello} isPro={isPro}/>
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

4 - For Child4, pass a boolean and use it


*/