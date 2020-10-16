function Person(name, fact) {
  this.name = name;
  this.fact = fact;
}

var members = new Array();
members.push(new Person("Sneh", "I'm left handed"));
members.push(new Person("Ila", "I have an identical twin sister"));
members.push(new Person("Ashwini", "I eat oatmeal every single morning"));
members.push(new Person("Ruchi", "Ruchi's fact"));


var cohort = {
	name: 'KAIRScares',
	motto: 'we KAIR about development but it Scares us too',
	team: members
};

for (const member of members) {
	document.getElementById(member.name).innerText = member.name;
	document.getElementById(member.name + "_fact").innerText = member.fact;
}

document.getElementById('motto').innerText = cohort.motto;
document.getElementById('group-name').innerText = cohort.name;