let chk = 0;

do {
  const input = prompt("Input your Grade : (Exit put 0)");
  let msg;
  if (isNaN(input)) {
    alert("Pls input number");
  } else if (input * 1 === 0) {
    chk = 1;
  } else {
    let num = input * 1;

    msg =
      num >= 80
        ? "A"
        : num >= 70 && num <= 79
        ? "B"
        : num >= 60 && num <= 69
        ? "C"
        : num >= 50 && num <= 59
        ? "D"
        : "F";
    alert("Your Grade is : " + msg);
  }
} while (chk == 0);
