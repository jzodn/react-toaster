import React, { useEffect, useRef } from "react";
import classes from "./Toaster.module.css";
import { useToast } from '../../hooks/useToast';

export default function Toast({ message, id }) {
  const toast = useToast();
  const timer = useRef(null);

  const removeToast = () => {toast.removeToast(id)};

  useEffect(() => {
    timer.current = setTimeout(() => {
      removeToast();
    }, 5000);

    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  return (
    <div className={classes.toast} onClick={() => removeToast()}>
      <p>{message}</p>
      <div className={classes.toastProgress}>
        <div className={classes.toastProgressBar}></div>
      </div>
    </div>
  );
};
