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
  document.getElementById("funfactinfo").style.display = "none";
});

document.getElementById("harry").addEventListener("click", function () {
  document.getElementById("funfactinfo").style.display = "block";
  document.getElementById("funfactname").innerHTML = "Harry Bae";
  document.getElementById("funfactfood").innerHTML = "Chicken";
  document.getElementById("funfactmovie").innerHTML = "The Notebook";
  document
    .getElementById("linkedinLink")
    .setAttribute("action", "https://www.linkedin.com/in/harrysebae/");
});

document.getElementById("neel").addEventListener("click", function () {
  document.getElementById("funfactinfo").style.display = "block";
  //Name
  document.getElementById("funfactname").innerHTML = "Neel Sandell";
  //Food
  document.getElementById("funfactfood").innerHTML = "Pizza";
  //Movie
  document.getElementById("funfactmovie").innerHTML = "Wolf of Wall Street";
  //Linkedin
  document.getElementById("linkedinLink").setAttribute("action", "linkedin.com/en/nsandell123");
});

document.getElementById("emily").addEventListener("click", function() {
  document.getElementById("funfactinfo").style.display = "block";
  document.getElementById("funfactname").innerHTML = "Emily Hodges";
  document.getElementById("funfactfood").innerHTML = "Tacos";
  document.getElementById("funfactmovie").innerHTML = "Lord of the Rings";
  document.getElementById("linkedinLink").setAttribute("action", "https://www.linkedin.com/in/emily-hodges-gt2021/");

});

document.getElementById("lily").addEventListener("click", function() {
 document.getElementById("funfactinfo").style.display = "block";
 document.getElementById("funfactname").innerHTML = "Yunni Zhu";
 document.getElementById("funfactfood").innerHTML = "All the Spicy Food";
 document.getElementById("funfactmovie").innerHTML = "Lady Bird";
 document.getElementById("linkedinLink").setAttribute("action", "https://www.linkedin.com/in/yunnizhu");

}
);