# React + Vite

React Drills

Main Youtube Playlist - 5-15 Min Videos: https://www.youtube.com/playlist?list=PLXqOQRPHA5ltU2uU0DzcQ4PsGPLfw7k8F

Longer Playlist - 20+ Min Videos: https://www.youtube.com/playlist?list=PLXqOQRPHA5lvKBQ2AIjAcS1DuQKMHhE7t

Web Dev Simplified - Branches ws_#_desc

  1. Git: https://github.com/WebDevSimplified
  2. Vid: https://www.youtube.com/@WebDevSimplified
  3. Blog:  
  4. Solutions: in App.jsx or in README.md


To install: npm i

To run: npm run dev

Drills

1 Props - Go to 'src/drills/props' to the 'Props.jsx'. For the App.jsx, import 'Props' and 'Parent'
  Reference: https://www.youtube.com/watch?v=Rh3tobg7hEo
  1. Pass a prop 'firstName' from the Parent component to the child component
  2. The same as 1 to Child2 but now pass a last name and use JS Destructing.
  3. Now pass a first & last name and a function to Child3. Use JS Destructing. 
  4. For Child4, pass a boolean and use it

2 Components - Go to 'src/drills/components'. For the App.jsx, import your components 
  Reference: https://youtu.be/hn80mWvP-9g?si=sHHWUOdIYduhRZ1o 
  1. Create a 'Header.jsx' component. Put in elements such as header, h1 and any other elements such as nav, ul, li, hr, etc
  2. Create a 'Food.jsx' component. Put in an ordered or unordered list with your favorite food.
  3. Create a 'Footer.jsx' component. Put in a footer element with content enclosed in a p element
  4. Add them all in the App.jsx

3 Conditional Rendering - Go to 'src/drills/render'. For App.jsx, import your components
  Reference: https://www.youtube.com/watch?v=XvURBpFxdGw 
  1. Create a 'UserGreeting.jsx' component. 
  2. In the App.jsx, pass the props 'isLoggedIn' with a boolean of true and 'userName' with any string.
  3. In the 'UserGreeting.jsx' use if else to show a message if the user is logged in. Ex. "Welcome Mike" or "Please log in" 

  4. Try it with a teneary operator 

4 Events
  Reference: https://www.youtube.com/watch?v=KpiiKuqNlYw&t=264s

  
  1. Part 1 - Function w no params for an event Create a 'Button.jsx' and add a button element with
  2. Add an onClick event
  3. Add a handleClick() method to alert "OUCH".

  5. Part 2 - Function w parameter for an event  Now add a parameter with name on 'handleClick2(name)' to a 2nd button. 
  6. Notice it will auto run the function. To prevent that, add an arrow function to the onClick event to prevent it. 

  7. Part 3 - Function with conditionAdd a count =0
  8. On the 'handleClick3', have 1 parameter of name.
  9. Add a condition, if count less than 3, add to the count and alert "<name>, You clicked me <count> of times"
  10. Else alert "<Name>, stop clicking me"
  
  11. Part 4 - The Event parameter Now create 'handleClick4' with an 'event' argument. Use 'e'
  12. Console.log the event.
  13. Make sure to wrap it with an arrow function in the event. Ex. {(e)=> handleClick4(e)} 
  14. Now lets change the text content from 'Click Me' to 'Ouch' using 'e.target.textContent = "Ouch"'
 
  15. Part 5 - Doubleclick Change from 'onClick' to 'doubleClick' for 'handleClick4'

  16. Part 6 - Picture w event Create a 'ProfilePicture.jsx'
  17. Make sure you have an image in 'assets' and import it to this jsx.
  18. Create an 'imageUrl' that is = to the image in the right directory
  19. Create an 'img' element with src={imageUrl}
  20. Add an onClick for a handleClick function that alerts 'OUCH'.

  
  21. Part 7 - Picture w event passing the event That should work. Now create a new event 'handleClick2' that has a parameter of the event as 'e' to the 'handleClick2' function.
  22. Since you have the event, just use the event to hide the image 
  Ex. e.target.style.display = "none"

5 Invalid Hook Call 
  1. Git:
  2. Video: https://www.youtube.com/watch?v=kf8loX8AN-c
  3. There are 3 ways to make the hook invalid. Try to initlize it outside of the functional component body, inside a useEffect hook and inside an onClick handler function. You can access and set it but not initialized it. 

6 Import
  1. Git:
  2. Videos: 1min+ https://www.youtube.com/watch?v=uGz8YNZNnx8&list=PLXqOQRPHA5ltU2uU0DzcQ4PsGPLfw7k8F&index=36&pp=gAQBiAQB

  12min+ https://www.youtube.com/watch?v=8Ma3HDbQZQk&list=PLXqOQRPHA5ltU2uU0DzcQ4PsGPLfw7k8F&index=37&t=304s&pp=gAQBiAQB

  3. Create a child comp under '/drills/components', export it and use it with an import.
  4. Create a js file with multiple functions to be used under '/utils/, export it and use it with an import

7. Conditional Rendering
  1. Git:
  2. Videos: https://www.youtube.com/watch?v=XvURBpFxdGw 

  12min+ https://www.youtube.com/watch?v=8Ma3HDbQZQk&list=PLXqOQRPHA5ltU2uU0DzcQ4PsGPLfw7k8F&index=37&t=304s&pp=gAQBiAQB

  3. Create a child comp under '/drills/components', export it and use it with an import.
  4. Create a js file with multiple functions to be used under '/utils/, export it and use it with an import