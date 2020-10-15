function Person(name, fact) {
  this.name = name;
  this.fact = fact;
}

var members = new Array();
members.push(new Person("Sneh", "Sneh's fact"));
members.push(new Person("Ila", "Ila's fact"));
members.push(new Person("Ashwini", "Ashwini's fact"));
members.push(new Person("Ruchi", "Ruchi's fact"));


var cohort = {
	name: 'KAIRScares',
	motto: 'we KAIR about development but it Scares us too',
	team: members
};

for (const member of members) {
	document.getElementById(member.name).innerText = member.name;
}

document.getElementById('motto').innerText = cohort.motto;
document.getElementById('group-name').innerText = cohort.name;