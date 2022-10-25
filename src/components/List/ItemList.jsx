import React from "react";
import Item from "./Item";
import classes from "./List.module.scss";
import { motion, AnimatePresence } from "framer-motion";
function ItemList({ items, deleteTodo, startEditHandler }) {
  let content = (
    <AnimatePresence>
      {items.length === 0 ? (
        <motion.div
          key="animation"
          className={classes.list__empty}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className={classes["list__empty-text"]}>
            List is empty. Maybe add one?
          </p>
        </motion.div>
      ) : (
        <motion.div
          className={classes.list__items}
          key="modal"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, transform: "translateY(10%)" }}
        >
          <AnimatePresence>
            {items.map((item) => (
              <motion.div
                className={classes["list__items-todo"]}
                key={item.id}
                initial={{
                  opacity: 0,
                  backdropFilter: "blur(2px)",
                  transform: "translateY(10%)",
                }}
                animate={{ opacity: 1, transform: "translateY(0%)" }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, transform: "translateY(10%)" }}
              >
                <Item
                  text={item.text}
                  id={item.id}
                  deleteTodo={deleteTodo}
                  key={item.id}
                  startEditHandler={startEditHandler}
                  item={item}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return <>{content} </>;
}

export default ItemList;
