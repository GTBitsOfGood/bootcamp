let cohort = {
    name: "Chow Chow",
    motto: "Dignity and refinement above all",
    members: {
        phoebeFunFact: "likes cupcakes",
        vikasFunFact: "likes juggling",
        emaFunFact: "likes boba",
        jonathanFunFact: "likes basketball"
      }
    }
/*document.querySelector('h1').innerText = cohort.name;
document.getElementById('P').innerText = "Phoebe";
*/
function sayYo() { 
    alert("Yo howzit goin?");
}
function getPhoebeFunFact() {
    if (document.getElementById("P").innerText === "Reveal Phoebe's Fun Fact") {
        document.getElementById("P").innerText = cohort.members.phoebeFunFact;
    } else {
        document.getElementById("P").innerText = "Reveal Phoebe's Fun Fact";
    }
}
function getVikasFunFact() {
    if (document.getElementById("V").innerText === "Reveal Vikas's Fun Fact") {
        document.getElementById("V").innerText = cohort.members.vikasFunFact;
    } else {
        document.getElementById("V").innerText = "Reveal Vikas's Fun Fact";
    }
}
function getEmaFunFact() {
    if (document.getElementById("E").innerText === "Reveal Ema's Fun Fact") {
        document.getElementById("E").innerText = cohort.members.emaFunFact;
    } else {
        document.getElementById("E").innerText = "Reveal Ema's Fun Fact";
    }
}
function getJonathanFunFact() {
    if (document.getElementById("J").innerText === "Reveal Jonathan's Fun Fact") {
        document.getElementById("J").innerText = cohort.members.jonathanFunFact;
    } else {
        document.getElementById("J").innerText = "Reveal Jonathan's Fun Fact";
    }
}