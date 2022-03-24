let chk = 0;
do {
  const user = prompt("Input User Name :");
  const passW = prompt("Input Password :");

  if (user === "") {
    alert("User is required");
  } else if (passW === "") {
    alert("password is required");
  } else if (user === "john" && passW === "qwerty") {
    alert("Hello world");
    chk = 1;
  } else {
    alert("Invalid username or password");
  }
} while (chk == 0);
