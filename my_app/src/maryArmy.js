import React from "react";

function Anagram() {
  let firstString = "Mary";
  let secondString = "Army";

  const Anagram = () =>{
    let string1 = firstString.split("").sort().join("");
    let string2 = secondString.split("").sort().join("");
    console.log(firstString.split());
    if (string1 === string2) {
      console.log("True");
    } else {
      console.log("False");
    }
  }
  Anagram(firstString, secondString);

  return <h2>Anagram 👇👇</h2>;
}

export default Anagram;
