//import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {
    setValue((prev) => prev + 1);
  };
  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  // useEffect(()=>{ 1번째를 제외한 나머지 모두  실행 하지 않을 코드,
  //                 [해당 조건에 해당되는 코드만 실행]})
  // 시작 때 딱 1번만 실행
  useEffect(() => {
    console.log("run only once ");
  }, []);

  //  시작 + keyword 가 6글자 이상일 때 코드 실행
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("I run when 'keyword' changes");
    }
  }, [keyword]);

  // 시작 + counter 될 때마다 코드 실행
  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);

  // 시작 + keyword & counter 될 때마다 코드 실행
  useEffect(() => {
    console.log("I run when keyword& counter change");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        type="text"
        palceholder="Serch here..."
        onChange={onChange}
      ></input>
      <h1 className={styles.title}> {counter}</h1>
      <button onClick={onClick}>click me</button>
      {/* <Button text={"button"} /> */}
    </div>
  );
}

export default App;
