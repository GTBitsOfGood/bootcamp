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
	motto: '___our motto___',
	team: members
};

console.log(cohort)