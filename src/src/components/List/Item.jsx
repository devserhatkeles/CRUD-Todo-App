import React from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import classes from "./List.module.scss";

function Item({ text, deleteTodo, id, startEditHandler, item }) {
  const deleteHandler = () => {
    deleteTodo(id);
  };

  const onEdit = () => {
    startEditHandler(item);
  };

  return (
    <>
      <div className={classes["list__items-todo--text-box"]}>
        <p className={classes["list__items-todo--text-box-txt"]}>{text}</p>
      </div>
      <div className={classes["list__items-todo--button-box"]}>
        <button
          className={classes["list__items-todo--button-box-btn"]}
          onClick={onEdit}
        >
          <FaEdit />
        </button>
        <button
          className={classes["list__items-todo--button-box-btn"]}
          onClick={deleteHandler}
        >
          <FaRegTrashAlt />
        </button>
      </div>
    </>
  );
}

export default Item;
