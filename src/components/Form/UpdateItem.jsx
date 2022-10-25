import React from "react";
import classes from "./Form.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { MdDone, MdOutlineCancel } from "react-icons/md";
function UpdateItem({
  editHandler,
  handleEditFormSubmit,
  handleEditChange,
  currentTodo,
}) {
  const cancelEditHandler = () => {
    editHandler(false);
  };

  return (
    <>
      <AnimatePresence>
        <motion.form
          className={classes.form__form}
          onSubmit={handleEditFormSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0 }}
          key="modal"
        >
          <div className={classes.form__wrapper}>
            <input
              className={classes.form__input}
              name="editTodo"
              type="text"
              placeholder="Edit todo"
              value={currentTodo.text}
              onChange={handleEditChange}
            />
            <div className={classes["form__button-box"]}>
              <button className={classes.form__button} type="submit">
                <MdDone />
              </button>
              <button
                className={classes.form__button}
                onClick={cancelEditHandler}
              >
                <MdOutlineCancel />
              </button>
            </div>
          </div>
        </motion.form>
      </AnimatePresence>
    </>
  );
}

export default UpdateItem;
