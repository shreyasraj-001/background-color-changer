// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
// import Navba from './components/Navbar';

function App() {
  const [color, setColor] = useState("#4B4BC3");
  return (
    <div
      className="w-full h-screen duration-200 style"
      style={{ backgroundColor: color }}
 
    >
     <div className="text-center text-white font-bold text-2xl px-40 py-50">
       Background is  {color} 
      </div>


      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-full px-3 py-2">
          <button onClick={()=>{setColor("Red")}} className="outline-none px-4 py-1 rounded-full text-white font-bold shadow-lg " style={{backgroundColor:"Red"}}>Red</button>
          <button onClick={()=>{setColor("rgb(55 100 214)")}} className="outline-none px-4 py-1 rounded-full text-white font-bold shadow-lg " style={{backgroundColor:"rgb(55 100 214)"}}>Blue</button>
          <button onClick={()=>{setColor("#56a8ff")}} className="outline-none px-4 py-1 rounded-full text-white font-bold shadow-lg " style={{backgroundColor:"#56a8ff"}}>Sky </button>
          <button onClick={()=>{setColor("#ff1ad3")}} className="outline-none px-4 py-1 rounded-full text-white font-bold shadow-lg " style={{backgroundColor:"#ff1ad3"}}>Pink</button>
          <button onClick={()=>{setColor("#2aa63f")}} className="outline-none px-4 py-1 rounded-full text-white font-bold shadow-lg " style={{backgroundColor:"#2aa63f"}}>Green</button>
          


        </div>
      </div>
    </div>
  );
}

export default App;
