import React from "react";

function App() {
  let pelindrome ="222"
  let pelindromeNumber = pelindrome.split('').reverse().join('')

  if(pelindrome === pelindromeNumber){
    console.log(true);
  }else{
    console.log(false);
  }

  return (
    <>
      <h4>Hello I'm Vivek</h4>
    </>
  );
}

export default App;