import React from "react";

function Uniquevalue() {
  var arr = [1, 5, 4, 1, 3, 2, 5, 4];

  arr.sort((a, b) => a - b);

  var Arr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i - 1] != arr[i] && arr[i] != arr[i + 1]) {
      console.log(i);
      Arr.push(arr[i]);
    }
  }
  console.log(Arr);

  return (
    <div>
      <h1>{Arr + ","}</h1>
    </div>
  );
}

export default Uniquevalue;