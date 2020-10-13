let cohort = {
    name: "Chow Chow",
    motto: "Dignity and refinement above all",
    members: {
        phoebeFunFact: "foobar1",
        vikasFunFact: "likes juggling",
        emaFunFact: "foobar2",
        jonathanFunFact: "foobar3"
        
      }
    }
/*document.querySelector('h1').innerText = cohort.name;
document.getElementById('P').innerText = "Phoebe";
*/
function sayYo() { 
    alert("Yo howzit goin?");
}
function getPhoebeFunFact() {
    document.getElementById("P").innerText = cohort.members.phoebeFunFact;
}
function getVikasFunFact() {
    document.getElementById("V").innerText = cohort.members.vikasFunFact;
}
function getEmaFunFact() {
    document.getElementById("E").innerText = cohort.members.emaFunFact;
}
function getJonathanFunFact() {
    document.getElementById("J").innerText = cohort.members.jonathanFunFact;
}