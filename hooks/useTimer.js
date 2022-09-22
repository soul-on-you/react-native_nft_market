import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import dateFormat from "../utils/dateFormatter";

// const useTimer = (endDate) => {
//   const [time, setTime] = useState(dateFormat(endDate)[0]);

//   useEffect(() => {
//     const date = dateFormat(endDate);
//     console.log(date[0]);
//     console.log(date[1]);

//     console.log("useTimer useEffect");

//     const timer = setTimeout(() => {
//       console.log("timer called");
//       flushSync(() => {
//         setTime(date[0]);
//       });
//     }, date[1]);

//     return () => {
//       console.log("clearing timer");
//       clearTimeout(timer);
//     };
//   }, [endDate, time, setTime]);

//   return [time];
// };

const useTimer = (endDate) => {
  const [time, setTime] = useState(dateFormat(endDate)[0]);

  const upTimer = () => {
    const [newTime, delay] = dateFormat(endDate);
    setTime(newTime);
    flushSync(() => {
      setTimeout(upTimer, delay);
    });
  };

  useEffect(() => {
    upTimer();
  }, []);

  return [time];
};

export { useTimer };
