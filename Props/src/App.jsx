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
function Button(props) {
  console.log("Props: ",props);
  return (
  <button onClick={() => {props.setCount(props.count +1);
  }}>{props.count}</button>
  );

}

export default App
