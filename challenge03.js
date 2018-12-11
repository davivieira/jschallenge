function a() {
  console.log(crazyVar);
}

function b() {
  let crazyVar = 2;
  a();
}

let crazyVar = 3;
b();

//Do you know anything about Scope Chain and execution context?

//Don't run this code and answer: which value will be printed?
