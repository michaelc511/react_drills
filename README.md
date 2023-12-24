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
