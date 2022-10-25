import React from "react";
import classes from "./Form.module.scss";
import { motion } from "framer-motion";

function Form(props) {
  return (
    <motion.div
      className={classes.form}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className={classes.form__content}>{props.children}</div>
    </motion.div>
  );
}

export default Form;
