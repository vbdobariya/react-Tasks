import React from "react";

function SortTheArray() {
  const sortArr = ["b", 6, "a", "q", 7, 2];

  const sort = sortArr.sort();
  console.log("SortTheArray 👉👉",sort);

  return <div>{sort + ","}</div>;
}

export default SortTheArray;
