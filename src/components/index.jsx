import React, { useState } from "react";
import { answerOrder } from "./constant";
import ColumnA from "./columnA/ColumnA";
import ColumnB from "./columnB/ColumnB";
import classes from "./index.module.css";

function Matching() {
  const [records, setRecords] = useState([]);
  const [answer, setAnswer] = useState([]);
  let record = {};

  const dragStart = (index, obj, e) => {
    if (e) {
      record["index"] = index;
      record["draggedItem"] = obj;
    }
  };
  const drop = (e, obj) => {
    if (e) {
      record["onDropItem"] = obj;
      setRecords((prev) => [...prev, record]);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.heading}>Match The Following</div>
      <div className={classes.match}>
        <ColumnA dragStart={dragStart} records={records} />
        <ColumnB drop={drop} records={records} answer={answer} />
      </div>
      <div className={classes.actions}>
        <button
          onClick={() => {
            setRecords([]);
            record = {};
            setAnswer([]);
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            if (records?.length < answerOrder?.length) return;
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
