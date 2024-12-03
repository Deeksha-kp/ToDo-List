import React, { useState } from 'react';
import './App.css';

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() => {
            if (toDo.trim()) {
              setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]);
              setToDo('');
            }
          }}
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => (
          <div className="todo" key={obj.id}>
            <div className="left">
              <input
                onChange={(e) => {
                  setToDos(
                    toDos.map((todo) =>
                      todo.id === obj.id ? { ...todo, status: e.target.checked } : todo
                    )
                  );
                }}
                checked={obj.status}
                type="checkbox"
              />
              <p>{obj.text}</p>
            </div>
            <div className="right">
              <i
                className="fas fa-times"
                onClick={() => setToDos(toDos.filter((todo) => todo.id !== obj.id))}
              ></i>
            </div>
          </div>
        ))}
        {toDos
          .filter((obj) => obj.status)
          .map((obj) => (
            <h1 key={obj.id}>{obj.text}</h1>
          ))}
      </div>
    </div>
  );
}

export default App;
