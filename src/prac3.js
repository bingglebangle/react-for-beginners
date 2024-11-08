import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [...currentArray, toDo]);
    // currrentArray 에 새로운 데이터 추가 + 기존 배열에 있는 데이터까지 합침
    // 기존 데이터를 불러올 때는 ... 를 씀
    setToDo(""); // 직접적으로 수정
  };

  console.log(toDos);

  return (
    <div>
      <h1>My To Do Lists : ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="write your to do"
        ></input>
        <button>Add to DO</button>
        <br></br>
        <br></br>
        {toDos.map((item, index) => (
          <li key={index}>
            {item}
            <hr></hr>
          </li>
        ))}
      </form>
    </div>
  );
}

export default App;
