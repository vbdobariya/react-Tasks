import React from "react";

function Alphabet() {
  const jumbledAlphabetically = [
    ["e", "d", "f"],
    ["a", "c", "b"],
    ["m", "o", "n"],
  ];
  // const sort = jumbledAlphabetically.sort();
  // console.log(sort);

  const alphabetSize = () => {
   jumbledAlphabetically.map((a) =>{
    a.sort().map((b) =>{
      console.log("👉👉", a);
      b.sort()
      console.log("👉👉hfghj", b);
    })
   })
  };

  return <h2>Alphabet 👇👇</h2>;
}

export default Alphabet;
