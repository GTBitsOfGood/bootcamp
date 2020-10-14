//function for mystery button 1, changes the background color to a random rgb value.
document.getElementById("colorBtn").addEventListener("click", function () {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var color = "rgb" + "(" + r + "," + g + "," + b + ")";
  document.body.style.backgroundColor = color;
});

//function for mystery button 2, prompts user until the user guess the question correct.
document.getElementById("promptBtn").addEventListener("click", function () {
  var counter = 0;
  while (true) {
    var answer = prompt("What is our favorite Pokemon?");
    if (answer === "vulpix" || answer === "Vulpix" || answer === "VULPIX") {
      break;
    }
    counter += 1;
    alert("Wrong Answer! You shall never escape!");
    if (counter == 2) {
      alert("***HINT: Starts with 'V'");
      continue;
    }
    if (counter == 3) {
      alert("***HINT: Next one is 'u'");
      continue;
    }
    if (counter == 4) {
      alert("***Really? Come on it's Vulpix. Try again!");
      continue;
    }
    if (counter == 5) {
      alert("I give up. you can go.");
      break;
    }
  }
  alert("I'll set you free now :)");
});

document.getElementById("minionBtn").addEventListener("click", function () {
  document.getElementById("pic").style.display = "block";
});

document.getElementById("reset").addEventListener("click", function () {
  document.getElementById("pic").style.display = "none";
  var color = "rgb" + "(" + 255 + "," + 255 + "," + 255 + ")";
  document.body.style.backgroundColor = color;
});