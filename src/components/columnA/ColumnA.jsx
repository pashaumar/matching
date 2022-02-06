import React from "react";
import classes from "./ColumnA.module.css";
import { columnA } from "../constant.js";
import ColumnChipA from "../columnChip/ColumnChipA";

function Column(props) {
  const { dragStart, data } = props;
  return (
    <div className={classes.container}>
      <div style={{ textAlign: "center" }}>Column A</div>
      {columnA?.map((item, index) => (
        <ColumnChipA
          item={item}
          key={item.id}
          dragStart={dragStart}
          index={index}
          data={data}
        />
      ))}
    </div>
  );
}

export default Column;
