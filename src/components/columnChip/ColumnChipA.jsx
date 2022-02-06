import React from "react";
import classes from "./ColumnChip.module.css";

function ColumnChipA(props) {
  const { item, dragStart, index, data } = props;
  const matchItem = data.find((record) => record?.draggedItem?.id === item?.id);
  const onDragStart = (event) => {
    dragStart(index + 1, item, event);
  };

  return (
    <div
      className={classes.columnA}
      draggable
      onDragStart={onDragStart}
      style={{
        pointerEvents:
          matchItem?.draggedItem?.id === item?.id ? "none" : "auto",
        opacity: matchItem?.draggedItem?.id === item?.id ? 0.8 : 1,
      }}
    >
      {item?.name}
    </div>
  );
}

export default ColumnChipA;
