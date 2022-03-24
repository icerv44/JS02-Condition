let input = prompt("input number : ");
let msg;

switch (input * 1) {
  case 1:
    msg = "One";
    break;
  case 0:
    msg = "Zero";
    break;
  case -1:
    msg = "Minus zero";
    break;
  default:
    msg = "Invalid number";
    break;
}
alert(msg);
