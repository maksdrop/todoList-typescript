import { useState, useEffect } from "react";

import Header from "../header/header";
import TodoMenu from "../todoMenu/todoMenu";
import TodoAdd from "../todoAdd/todoAdd";
import TodoList from "../todoList/todoList";

import { Task } from "../../core/models";

import "./app.scss";

const App = () => {
  const dataTask1: Task[] = [];
  const [dataTask, setDataTask] = useState(dataTask1);
  const [tabs, setTabs] = useState("all");
  const [filterTask, setFilterTask] = useState(dataTask);
  const [count, setCount] = useState({ all: 0, active: 0, completed: 0 });

  const addTask = (name: string) => {
    const newTask = {
      name,
      isChecked: false,
      id: Date.now(),
    };
    setDataTask([...dataTask, newTask]);
  };

  const deleteСompletedTasks = () => {
    const newData = dataTask.filter((element: Task) => !element.isChecked);
    setDataTask(newData);
  };

  const filterTasks = (tab: string) => {
    setTabs(tab);
  };

  const onToggleChecked = (id: number, prop: string) => {
    const newData = dataTask.map((item: Task) => {
      if (item.id === id) {
        return { ...item, [prop]: !item["isChecked"] };
      }
      return item;
    });
    setDataTask(newData);
  };

  useEffect(() => {
    let filter;
    switch (tabs) {
      case "all":
        setFilterTask(dataTask);
        break;
      case "active":
        filter = dataTask.filter((elem: Task) => elem.isChecked === false);
        setFilterTask(filter);
        break;
      case "completed":
        filter = dataTask.filter((elem: Task) => elem.isChecked === true);
        setFilterTask(filter);
    }
  }, [tabs, dataTask]);

  useEffect(() => {
    let allCount = dataTask.length;
    let completedCount = dataTask.filter(
      (elem: Task) => elem.isChecked === true
    ).length;
    let activeCount = allCount - completedCount;
    setCount({ all: allCount, active: activeCount, completed: completedCount });
  }, [dataTask]);

  return (
    <div className="app">
      <div className="container">
        <Header />
        <TodoAdd onAdd={addTask} />
        <TodoList data={filterTask} onToggleChecked={onToggleChecked} />
        <TodoMenu
          count={count}
          active={tabs}
          onActive={filterTasks}
          onDelete={deleteСompletedTasks}
        />
      </div>
    </div>
  );
};

export default App;
