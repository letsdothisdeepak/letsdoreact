
// import { useState } from 'react';
// import './App.css'


// // const 


// function App() {
  
//   let [counter,SetCounter]=  useState(15)

//   const AddValue= ()=>{
//          SetCounter(counter+1)
//   }
  
//   const RemoveValue= ()=>{
//     SetCounter(counter-1)
// }

//   return (
//     <>
//       <h1>Counter:{counter} </h1>
//       <button onClick={AddValue}>
//         AddValue</button>
//       <br></br>
//       <button onClick={RemoveValue} >RemoveValue</button>
//     </>
//   )
// }

// export default App


import { useState } from "react";
import ReactDOM from "react-dom/client";
import './App.css';

function FavoriteColor() {
  const [color, setColor] = useState("red");
  console.log("Deepak");
  
    
  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);

export default App
