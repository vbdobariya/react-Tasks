import React from "react";

function Pair() {
  let number = [1, 2, 5, 5, 1, 6, 1, 5, 3, 6, 1, 5, 2, 1, 3];

  const sort = number.sort();
  console.log(sort);

  const counts = number.reduce(
    (num, value) => ({
    ...num,
    [value]: (num[value] || 0) + 1 / 2,
    // console.log("num",num)
  }));
  console.log(counts);

  return (
    <>
      <div>Hello, I'm Vivek</div>
    </>
  );
}

export default Pair;