import React from "react";
import classes from "./List.module.scss";
import { motion, AnimatePresence } from "framer-motion";

function List(props) {
  return (
    <AnimatePresence>
      <motion.div
        className={classes.list}
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        exit={{ opacity: 0 }}
      >
        {props.children}
      </motion.div>
    </AnimatePresence>
  );
}

export default List;
