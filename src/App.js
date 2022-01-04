
import { useState } from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState(0)
//  function add(){
//    setCount(count+1);
  
//  }
//  function minus(){
//   setCount(count-1);
 
// }
function counter(value){
  if(count >= 0)
  setCount(count+value);
 
}
  return (
    <div className="App">
    
      <div className='buttons'>
      <h1>{count}</h1>
        <button onClick={()=>{counter(1)}}>add</button>
        
        <button onClick={()=>{counter(-1)}}>minus</button>
        </div>
        
    </div>
  );
}

export default App;
