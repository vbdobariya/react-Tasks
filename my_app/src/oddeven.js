import React from "react";

function Oddeven() {
  var Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    oddArr = [],
    evenArr = [];

  for (var i = 0; i < Arr.length; i++) {
    console.log("lenght", Arr.length);
    if ((i + 2) % 2 == 0) {
      console.log("if", i + 2);
      evenArr.push(Arr[i]);
    } else {
      oddArr.push(Arr[i]);
    }
  }
  console.log(evenArr);
  console.log(oddArr);

  return (
    <div>
      <h2>evenArr :- {evenArr + ","}</h2>
      <h2>oddArr :- {oddArr + ","}</h2>
    </div>
  );
}

export default Oddeven;
