import React, { useState } from "react";
import { answerOrder } from "./constant";
import ColumnA from "./columnA/ColumnA";
import ColumnB from "./columnB/ColumnB";
import classes from "./index.module.css";

function Matching() {
  const [data, setData] = useState([]);
  const [answer, setAnswer] = useState([]);
  let draggedRecord = {};

  const dragStart = (index, obj, e) => {
    if (e) {
      draggedRecord["index"] = index;
      draggedRecord["draggedItem"] = obj;
    }
  };
  const drop = (e, obj) => {
    if (e) {
      draggedRecord["onDropItem"] = obj;
      setData((prev) => [...prev, draggedRecord]);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.heading}>Match The Following</div>
      <div className={classes.match}>
        <ColumnA dragStart={dragStart} data={data} />
        <ColumnB drop={drop} data={data} answer={answer} />
      </div>
      <div className={classes.actions}>
        <button
          onClick={() => {
            setData([]);
            draggedRecord = {};
            setAnswer([]);
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            if (data?.length < 6) return;
            setAnswer(answerOrder);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Matching;
