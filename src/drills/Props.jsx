import "../App.css"



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

2 - The same as 1 to Child2 but now pass a last name and use JS Destructing.

3 - Now pass a first & last name and a function to Child3. Use JS Destructing. 

4 - For Child4, pass a boolean and use it

*/