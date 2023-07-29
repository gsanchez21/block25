import './App.css';
import { useState } from "react";

function App() {
const [count, setCount] = useState(0);

  return (
    <>
      <div className='App'>
        <Button count={count} setCount={setCount} />
      
      </div>
      
      
      <div className="card">
 
      </div>
    
    </>
  );
}
function Button({count, setCount}) {
  //console.log("Props: ",props);
  return (
  <button onClick={() => {setCount(count)
  }}>{count}</button>
  );

}

export default App
