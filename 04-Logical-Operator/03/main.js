let chk = 0;

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
  }
} while (chk == 0);
