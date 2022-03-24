const input = prompt("Name : ");
let user = "guest",
  passWord;

if (input === "" || input === null) {
}
if (input === "codecamp") {
  const passW = prompt("Input Password");
  if (passW === "123456") {
    user = "codecamp";
  } else {
    alert("Wrong Password");
  }
}
alert("Wellcome : " + user);
