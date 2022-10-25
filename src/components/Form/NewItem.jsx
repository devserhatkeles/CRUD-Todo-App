import React, { useState } from "react";
import classes from "./Form.module.scss";
import { MdOutlineAddCircleOutline, MdOutlineCancel } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

function NewItem({ addTodo }) {
  const [isActive, setIsActive] = useState(false);
  const [enteredValue, setEnteredValue] = useState("");

  const handleChange = (e) => {
    setEnteredValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!enteredValue) return;
    addTodo(enteredValue);
    setEnteredValue("");
  };

  const cancelActiveHandler = () => {
    setIsActive(false);
  };

  const startActiveHandler = () => {
    setIsActive(true);
  };

  return (
    <>
      {!isActive ? (
        <AnimatePresence>
          <motion.div
            className={classes.form__edit}
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            exit={{ opacity: 0 }}
          >
            <p>Would you like to add a task?</p>
            <button
              className={classes.form__button}
              onClick={startActiveHandler}
            >
              Add
            </button>
          </motion.div>
        </AnimatePresence>
      ) : (
        <>
          <AnimatePresence>
            <motion.form
              className={classes.form__form}
              onSubmit={handleSubmit}
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className={classes.form__wrapper}>
                <input
                  className={classes.form__input}
                  type="text"
                  name="todo"
                  placeholder="Add todo"
                  value={enteredValue}
                  onChange={handleChange}
                />

                <div className={classes["form__button-box"]}>
                  <button className={classes.form__button} type="submit">
                    <MdOutlineAddCircleOutline />
                  </button>
                  <button
                    className={classes.form__button}
                    onClick={cancelActiveHandler}
                  >
                    <MdOutlineCancel />
                  </button>
                </div>
              </div>
            </motion.form>
          </AnimatePresence>
        </>
      )}
    </>
  );
}

export default NewItem;
