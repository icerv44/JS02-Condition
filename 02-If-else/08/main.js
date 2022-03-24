let chk = 0;
do {
  const point = prompt("Input your point : input 0 for quit");
  if (isNaN(point)) {
    alert("pls try again");
  } else {
    let num = point * 1;

    if (num >= 80) {
      alert("Your grade is A");
    } else if (num >= 70 && num <= 79) {
      alert("Your grade is B");
    } else if (num >= 60 && num <= 69) {
      alert("Your grade is C");
    } else if (num >= 50 && num <= 59) {
      alert("Your grade is D");
    } else if (num !== 0) {
      alert("Your grade is F");
    }
  }
  if (point * 1 === 0) {
    chk = 1;
  }
} while (chk == 0);
