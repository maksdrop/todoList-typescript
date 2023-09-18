import { useState, ChangeEvent, FormEvent } from "react";

import "./todoAdd.scss";

const TodoAdd = (props: any) => {
  const [name, setName] = useState("");

  const onValueName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (name.length < 1) {
      return;
    }
    props.onAdd(name);
    setName("");
  };

  return (
    <form className="task__add" onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={onValueName}
        placeholder="What needs to be done?"
        autoComplete="off"
      />
      <button>Add</button>
    </form>
  );
};

export default TodoAdd;
