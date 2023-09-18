import "./todoItem.scss";

const TodoItem = (props: {
  name: string;
  isChecked: boolean;
  onToggleChecked: (event: React.MouseEvent<HTMLElement>) => void;
}) => {
  return (
    <div className="task__item">
      <input type="checkbox" id="clon" checked={props.isChecked} readOnly />
      <label htmlFor="clon" onClick={props.onToggleChecked}>
        <div className="mark"></div>
      </label>
      <span className={props.isChecked ? "task__item_crossed" : ""}>
        {props.name}
      </span>
    </div>
  );
};

export default TodoItem;
