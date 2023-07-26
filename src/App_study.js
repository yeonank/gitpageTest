import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
function Hello(){
  useEffect(()=> {
    console.log("created:)");
    return () => console.log("destroyed :(");//cleanup function
  }, [])
  return <h1>Hello</h1>;
}

function App(){
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "hide": "show"}</button>
    </div>
  )
}
// function App() {
//   const [counter, setValue] = useState(0);
//   const onClick = () => setValue((prev) => prev + 1);
//   console.log("i run all the time");
//   const iRunOnlyOnce = () => {
//     console.log("i run only once");
//   }
//   useEffect(() => {
//     console.log("call the api");
//   }, []);//이 함수를 특정한 변수에 바인딩하는거지(oberve같은거)
//   return (
//     <div className="App">
//       <h1 >{counter}</h1>
//       <button onClick={onClick}>Click me</button>
//     </div>
//   );
// }

//export default App;
