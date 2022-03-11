import { useEffect, useRef, useState } from "react";
import "./styles.css";

// export default function App() {
//   const ref = useRef(0);
//   const handleClick = () => {
//     ref.current++;
//     console.log(`I am ${ref.current} clicked`);
//   };
//   console.log('I rendered!');
//   return (
//     <div className="App">
//       <button onClick = {handleClick}>Click</button>
//     </div>
//   );
// }

const App = () => {
  const [state, setState] = useState(0);
  const timeRef = useRef(0);
  const handleStart = () => {
    console.log("Inside start", timeRef.current);
    if (timeRef.current) {
      return;
    }
    timeRef.current = setInterval(() => {
      setState((prevState) => prevState + 1);
    }, 10);
  };
  const handleStop = () => {
    console.log(timeRef.current);
    clearInterval(timeRef.current);
    timeRef.current = 0;
  };

  const handleReset = () => {
    clearInterval(timeRef.current);
    timeRef.current = 0;
    setState(0);
  };
  useEffect(() => {
    return () => clearInterval(timeRef.current);
  }, []);
  return (
    <>
      <h1>Time {state} ms</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};
export default App;
