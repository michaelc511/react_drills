# React + Vite

React Drills

To install: npm i

To run: npm run dev

Drills

1 Props - Go to 'src/drills/props' to the 'Props.jsx'. For the App.jsx, import 'Props' and 'Parent'

  1. Pass a prop 'firstName' from the Parent component to the child component
  2. The same as 1 to Child2 but now pass a last name and use JS Destructing.
  3. Now pass a first & last name and a function to Child3. Use JS Destructing. 
  4. For Child4, pass a boolean and use it

2 Components - Go to 'src/drills/components'. For the App.jsx, import your components 

  1. Create a 'Header.jsx' component. Put in elements such as header, h1 and any other elements such as nav, ul, li, hr, etc
  2. Create a 'Food.jsx' component. Put in an ordered or unordered list with your favorite food.
  3. Create a 'Footer.jsx' component. Put in a footer element with content enclosed in a p element
  4. Add them all in the App.jsx

3 Conditional Rendering - Go to 'src/drills/render'. For App.jsx, import your components
  1. Create a 'UserGreeting.jsx' component. 
  2. In the App.jsx, pass the props 'isLoggedIn' with a boolean of true and 'userName' with any string.
  3. In the 'UserGreeting.jsx' use if else to show a message if the user is logged in. Ex. "Welcome Mike" or "Please log in" 

  4. Try it with a teneary operator 

4 Events
  Reference: https://www.youtube.com/watch?v=KpiiKuqNlYw&t=264s

  Part 1 - Function w no params for an event
  1. Create a 'Button.jsx' and add a button element with
  2. Add an onClick event
  3. Add a handleClick() method to alert "OUCH".

  Part 2 - Function w parameter for an event 
  5. Now add a parameter with name on 'handleClick2(name)' to a 2nd button. 
  6. Notice it will auto run the function. To prevent that, add an arrow function to the onClick event to prevent it. 

  Part 3 - Function with condition
  7. Add a count =0
  8. On the 'handleClick3', have 1 parameter of name.
  9. Add a condition, if count less than 3, add to the count and alert "<name>, You clicked me <count> of times"
  10. Else alert "<Name>, stop clicking me"

  Part 4 - The Event parameter
  11. Now create 'handleClick4' with an 'event' argument. Use 'e'
  12. Console.log the event.
  13. Make sure to wrap it with an arrow function in the event. Ex. {(e)=> handleClick4(e)} 
  14. Now lets change the text content from 'Click Me' to 'Ouch' using 'e.target.textContent = "Ouch"'

  Part 5 - Doubleclick
  15. Change from 'onClick' to 'doubleClick' for 'handleClick4'

  Part 6 - Picture w event
  16. Create a 'ProfilePicture.jsx'
  17. Make sure you have an image in 'assets' and import it to this jsx.
  18. Create an 'imageUrl' that is = to the image in the right directory
  19. Create an 'img' element with src={imageUrl}
  20. Add an onClick for a handleClick function that alerts 'OUCH'.

  Part 7 - Picture w event passing the event
  21. That should work. Now create a new event 'handleClick2' that has a parameter of the event as 'e' to the 'handleClick2' function.
  22. Since you have the event, just use the event to hide the image 
  Ex. e.target.style.display = "none"


5 Looping through arrays

6 State management

7 Hooks


8 Review - 
  1. Create a parent and child component. 
  2. Define a variable and function in the parent. 
  3. Pass props variables and a function. 
  4. In the child, activate the function with a button.
  5. Store the data in a state.
  6. Store the data in an object or arrays 
  7. Use useEffect hook to store in localStorage


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
