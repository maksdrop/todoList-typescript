import TodoItem from "../todoItem/todoItem";

import { Task } from "../../core/models";

import "./todoList.scss";

const TodoList = (props: {
  data: Task[];
  onToggleChecked: (id: number, prop: string) => void;
}) => {
  const tasks = props.data.map((item: Task) => {
    const { id, ...itemTask } = item;

    return (
      <TodoItem
        key={id}
        {...itemTask}
        onToggleChecked={() => props.onToggleChecked(id, "isChecked")}
      />
    );
  });
  return (
    <div className="task__list">
      {tasks.length === 0
        ?
        <span className="task__empty">It's still empty here</span>
        :
        tasks
      }
    </div>
  );
};

export default TodoList;
