import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  // function byFn() {
  //   console.log("bye :(");
  // }

  // function hiFn() {
  //   console.log("created :) ");
  //   return byFn; // byFn() 은 그 즉시 바로 호출 되므로 byFn 해야 종료되고 실행됨
  // }

  // useEffect(function () {
  //   console.log("hi :)");
  //   return function () {
  //     console.log("bye :(");
  //   };
  // }, []);

  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []); // 사라질 떄 코드 작동

  return <h1>hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      <button onClick={onClick}> {showing ? "Hide" : "Show"}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;
