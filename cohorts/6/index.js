//lol idk if im doing this right

var cohort = {
  name: cohortname("UtterNonsense"),
  motto: cohortmotto("Some sense just don't need to be made!"),
  //members will be populated with the teammember objects created bellow
  members: [],
};

//function to create new team members
function teammember(name, funfact) {
  this.name = name;
  this.funfact = funfact;
}

const Jacob = teammember("Jacob", "Jacob has flown the Goodyear blimp");
const Stephanie = teammember(`Stephanie`, `Stephanie is taller than Max!`);
const Nidhisha = teammember("Nidhisha", `Nidhisha loves dogs!`);

document.getElementsById("JacobCard").onclick = setFunFact(Jacob);
document.getElementsById("StephanieCard").onclick = setFunFact(Stephanie);
document.getElementsById("NidhishaCard").onclick = setFunFact(Nidhisha);

function setFunFact(teammember) {
  document.getElementById("funfactfootertext").innerHTML = teammember.funfact;
}

function cohortname(cohortname) {
  this.cohortname = cohortname;
}

function cohortmotto(motto) {
  this.motto = motto;
}

//TODO: use js to populate html
