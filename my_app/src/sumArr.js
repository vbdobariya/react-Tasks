import React from "react";

function OrderBySum() {
  const sumArr = [
    [1, 2],
    [4, 5],
    [7, 8],
    [3, 2],
    [1, 3],
    [1, 1],
  ];
  const sortedArray = sumArr.sort((a, b) => {
    const sumA = a.reduce((acc, currentValue) => acc + currentValue);
    const sumB = b.reduce((acc, currentValue) => acc + currentValue);
    // console.log("a", a);
    // console.log("b", b);
    // console.log("sumA", sumA);
    // console.log("sumB", sumB);
    // console.log("sumA-sumB", sumA - sumB);
    return sumA - sumB;
  });
  console.log("OrderBySum 👉👉", sortedArray);

  return <h3>Order By Sum Value 👇👇</h3>;
}

export default OrderBySum;
