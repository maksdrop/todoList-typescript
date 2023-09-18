import { CountType } from "../../core/models";

import "./todoMenu.scss";

const TodoMenu = ({
  onDelete,
  onActive,
  count,
  active,
}: {
  onDelete: (event: React.MouseEvent<HTMLElement>) => void;
  onActive: (tab: string) => void;
  count: CountType;
  active: string;
}) => {
  return (
    <nav className="menu">
      <span>{count.active} tasks left</span>
      <ul className="menu__list">
        <li>
          <button
            onClick={() => onActive("all")}
            className={`menu__item ${
              active === "all" ? "menu__item_active" : ""
            }`}
          >
            All ({count.all})
          </button>
        </li>
        <li>
          <button
            onClick={() => onActive("active")}
            className={`menu__item ${
              active === "active" ? "menu__item_active" : ""
            }`}
          >
            Active ({count.active})
          </button>
        </li>
        <li>
          <button
            onClick={() => onActive("completed")}
            className={`menu__item ${
              active === "completed" ? "menu__item_active" : ""
            }`}
          >
            Completed ({count.completed})
          </button>
        </li>
      </ul>
      <button className="menu__item" onClick={onDelete}>Clear completed</button>
    </nav>
  );
};

export default TodoMenu;
