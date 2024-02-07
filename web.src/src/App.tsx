import React, { FC, useEffect, useState } from 'react'; 
import './App.css';
import Counter from "./Counter"

const App: FC<{title:string}> = (props) =>{
   // https://preactjs.com/guide/v10/hooks/#useeffect
   const [time, setTime] = useState(Date.now());
   useEffect(() => {
     let timer = setInterval(() => {
       setTime(Date.now());
     }, 1000);
 
     return function cleanup() {
       clearInterval(timer);
     };
   }, []);
 
   return ( 
      
 
     <div className="App">
       <h1> {props.title}!</h1> 
       <h2>
         当前时间:<span>{new Date(time).toLocaleTimeString()}</span>
       </h2>
 
       <div className="App-content"> 
         <Counter />
         <Counter /> 
       </div>
 
       
     </div>
  );
}

export default App;
