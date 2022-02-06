import React from "react";
import classes from "./ColumnB.module.css";
import { columnB } from "../constant.js";
import ColumnChipB from "../columnChip/ColumnChipB";

function Column(props) {
  const { drop, records, answer } = props;
  return (
    <div className={classes.container}>
      <div style={{ textAlign: "center" }}>Column B</div>
      {columnB?.map((item, index) => (
        <ColumnChipB
          item={item}
          key={item.id}
          drop={drop}
          records={records}
          answer={answer}
          index={index}
        />
      ))}
    </div>
  );
}

export default Column;
