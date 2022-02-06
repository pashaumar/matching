import React from "react";
import classes from "./ColumnChip.module.css";

function ColumnChipB(props) {
  const { item, drop, data, answer, index } = props;

  const matchItem = data.find((record) => record?.onDropItem?.id === item?.id);

  const onDragOver = (event) => {
    event.preventDefault();
  };
  const onDrop = (event) => {
    if (matchItem?.onDropItem?.id === item?.id) {
      return;
    }
    drop(event, item);
  };

  return (
    <div className={classes.container}>
      <div
        className={classes.columnB}
        onDragOver={onDragOver}
        onDrop={onDrop}
        style={{
          border:
            matchItem?.onDropItem?.id === item?.id
              ? "1px dotted #686de0"
              : "1px solid #686de0",
          ...(answer?.length === 6 && {
            backgroundColor:
              matchItem?.index === answer[index] ? "#27ae60" : "#ff7675",
          }),
          color: answer?.length === 6 ? "white" : "#686de0",
        }}
      >
        {item?.name}
      </div>
      {matchItem && <span className={classes.index}>{matchItem?.index}</span>}
    </div>
  );
}

export default ColumnChipB;
