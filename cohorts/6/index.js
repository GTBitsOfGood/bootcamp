//lol idk if im doing this right 

var cohort = {
    name: cohortname('UtterNonsense'),
    motto: cohortmotto("Changing lives 10Bit at a time (10Bit > 8BIT)"),
    //members will be populated with the teammember objects created bellow 
    members: [],
}

//function to create new team members 
function teammember(name, funfact) {
    this.name  = name;
    this.funfact = funfact;
}

function cohortname(cohortname) {
    this.cohortname = cohortname;
}

function cohortmotto(motto) {
    this.motto = motto;
}


//TODO: use js to populate html 