function checkBrowser(brows) {
  brows == "edge"
    ? alert("You've got the Edge!")
    : brows == "Chrome"
    ? ""
    : brows == "Firefox"
    ? ""
    : brows == "Safari"
    ? ""
    : brows == "Opera"
    ? alert("Okay we support these browsers too")
    : alert("We hope that this page looks ok!");
}

checkBrowser("Edge");
checkBrowser("Chrome");
checkBrowser("Firefox");
checkBrowser("Safari");
checkBrowser("Opera");
checkBrowser("abc");
