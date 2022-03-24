const input = prompt("Name : ");
let user = "guest",
  passWord;

<<<<<<< HEAD
if (input === "" || input === null) {
}
if (input === "codecamp") {
  const passW = prompt("Input Password");
  if (passW === "123456") {
    user = "codecamp";
  } else {
    alert("Wrong Password");
=======
do {
  const input = prompt("Name : ");
  const passW = "";
  let user, passWord;

  input === "" || input === null ? (user = "guest") : "";
  if (input === "codecamp") {
    passW = prompt("Input Password");

    if (passW === "123456") {
      user = "codecamp";
      alert("Wellcome");
      chk = 1;
    } else {
      alert("Wrong Password");
    }
>>>>>>> 663578ec69a7b5a3a3689ec51757b83b2d87f19f
  }
}
alert("Wellcome : " + user);
