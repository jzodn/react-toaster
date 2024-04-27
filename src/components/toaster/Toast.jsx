import React, { useEffect, useRef, useState } from "react";
import classes from "./Toaster.module.css";
import { useToast } from '../../hooks/useToast';

export default function Toast({ message, id }) {
  const toast = useToast();
  const timer = useRef(null);
  const progress = useRef(null);
  const [dismissed, setDismissed] = useState(false);

  const removeToast = () => {
    setDismissed(true);
    setTimeout(() => {
      toast.removeToast(id);
    }, 400);
  };

  useEffect(() => {
    timer.current = setTimeout(() => {
      removeToast();
    }, 5000);

    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timer.current);
    progress.current.style.animationPlayState = "paused";
  };

  const handleMouseLeave = () => {
    const remainingTime = (progress.current.offsetWidth / progress.current.parentElement.offsetWidth) * 5000;

    progress.current.style.animationPlayState = "running";

    timer.current = setTimeout(() => {
      removeToast()
    }, remainingTime);
  }

  return (
    <div className={`${classes.toast} ${dismissed ? classes.toastDismissed : ""}`} onClick={() => removeToast()} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <p>{message}</p>
      <div className={classes.toastProgress}>
        <div ref={progress} className={classes.toastProgressBar}></div>
      </div>
    </div>
  );
};
