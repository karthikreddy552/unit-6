import React from "react";

export default function Todo() {
  const [task, setTask] = React.useState([]);
  const fetchData = async () => {
    let res = await fetch("http://localhost:3000/posts");
    let data = await res.json();
    setTask(data);
    // console.log(task);
  };

  const addTask = async () => {
    let newTask = document.getElementById("newTask").value;
    let res = await fetch("http://localhost:3000/posts", {
      method: "POST",
      body: JSON.stringify({ task: newTask }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    console.log(data);
  };

  const displayTasks = task.map((elem, index) => {
    return (
      <p key={index + 1}>
        Task {index} is {elem.task}
      </p>
    );
  });

  return (
    <div>
      <h1>Todo</h1>
      <button onClick={fetchData}>GET TASKS</button>
      <div>{displayTasks}</div>
      <div>
        <input id="newTask" type="text" placeholder="Add Something here" />
        <button onClick={addTask}>Add Task</button>
      </div>
    </div>
  );
}