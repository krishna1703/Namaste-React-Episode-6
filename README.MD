# Namaste React ❤️

# Episode - 6 Exploring the world 🚀

# planning for the food ordering web app 🍴

- Header
- log0
- Nav-items

      - Body
        - Search
        - Restaurant Container
        - Restaurant card

- Footer
- copyright
- links
- Address

# props 🧡

- props like as Argument to the function
- props (properties)
- Props are arguments passed into React components.
- Props are passed to components via HTML attributes.
- React Props are read-only! You will get an error if you try to change their value.

# config Driven UI 😃

- All the UI is the driven by config (Backend Api)
- In a configuration-driven UI, the layout, styles, and other properties of UI elements are defined in a configuration file or database, which can be easily modified without requiring changes to the codebase. This approach makes it easier to customize the UI for different use cases or user groups, without the need for extensive coding.

# lets talk about the Key 🙃

- when ever you are looping anythings you have always to give a key

# React don't recommend index 🤢

- react don't recommend using indexes for the keys if the order of the item may change
- index as a key is an anti-pattern

# Notes imp 😏

- not using key (not acceptable) <<<<<< Index as key <<<<<<<<< unique id (Best practice)

# Two way to Export and import ❤️

- 1. Default export/import

- export default component ;
- import App from "path":

- 2. Named export/import

- export const App ;
- import {component} from "path"

# React only good in efficient Dom manipulation❤️

# lets talk about Hooks❤️

- React Hooks just a normal javascript function

# Most Important Hooks ❤️❤️❤️❤️❤️

- useState()
- useEffect()

# useState ❤️❤️❤️❤️❤️

- import {useState} from "react";
- useState create a state of the component
- const [list , setlist] = useState();

# State Variable❤️

- const[listOfitem] = useState([]);

# Normal Js Variable ❤️

- let listOfitem = [];

# Render ❤️❤️❤️❤️❤️

- [When ever a state variable update react will Rerender the component this is called Render ]

# lets talk about virtual Dom and Diff. Algorithm ❤️❤️❤️❤️

- React use Reconciliation Algorithm (React fiber)

# virtual dom = component treats as an object known as React virtual dom❤️❤️❤️❤️❤️❤️

# Diff. Algorithm ❤️❤️❤️❤️❤️ 
 
- finds out the different between two virtual dom
- React find differnce between two virtual dom and react automagically update the actual dom

# Reconciliation Algorithm ❤️

- the reconciliation algo react uses to diff one tree with another tree to determine which parts need to changed

# React Fiber ❤️❤️❤️❤️❤️

- fiber is the new reconciliation engine in react 16 its main goal enable incremental rendering of the virtual dom(new Reconciliation algorithm is known as react fiber).

# monolithic Architechture ❤️❤️❤️

- monolithic architecture is built as one large system and is usually one code base;

# Microservices Architechture ❤️❤️❤️

- microservices architecture is built as small independent module based on business functionality ;

# Two approach how webapps fetch the data from backend data ❤️
- 1.st way

- loads > api > render 

- 2nd way

- loads > render > api > render (in React  js 2nd way  of fetch the data from backend is best way to fetch the data to  webapps)

# useEffect Hook ❤️
-  useEffect(()=>{
   <!-- call back function --> 
   <!-- []= dependency array -->
},[]);

- first component willbe render and after render the component useEffect render(call back function)

# optional chaining(?) ❤️

- the optional chaining operator return undefined if an object is undefined or null ( instead of throwing an error)
- instead of throwing an error returns undefined;

# shimmer ui  ❤️
- its called as skeleton screen (this is fake ui)
 
# state react variable   ❤️
- when ever state variable update react triggers a reconciliation cycle (re- render the component)
