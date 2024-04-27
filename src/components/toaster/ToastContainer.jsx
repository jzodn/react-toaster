import classes from "./Toaster.module.css";
import Toast from "./Toast.jsx";
import React from "react";

export default function ToastContainer({ toasts }) {

  return (
    <div className={classes.wrapper}>
      {toasts.map((toast) => {
        return (
          <Toast key={toast.id} {...toast} />
        )
      })}
    </div>
  );
};
