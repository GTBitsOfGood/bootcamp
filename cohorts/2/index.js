let memberList = document.getElementById("memberList");

function Member(name, fun_fact) {
    this.name = name;
    this.fun_fact = fun_fact;
}

let member1 = new Member("Lidya", "favorite book: Classics of Western Philosophy");
let member2 = new Member("Alice", "wears lolita-fashion casually");
let member3 = new Member("Seife", "insert fact");
let member4 = new Member("Shree", "insert fact");
let member5 = new Member("Evan", "insert fact");
let member6 = new Member("Vivian", "I paint Warhammer minis as a hobby");

var cohort = {
    name: "Terrible Twos",
    motto: "Send help",
    members: [
        member1,
        member2,
        member3,
        member4,
        member5,
        member6,
    ] 
}

console.log(document);

memberList.addEventListener("mouseover", function( event ) {
	//display fun fact
	cohort.members.forEach(member => member.name == event.target.textContent ? event.target.textContent = member.fun_fact : console.log("nope"));
}, false);

memberList.addEventListener("mouseout", function( event ) {
	//display fun fact
	cohort.members.forEach(member => member.fun_fact == event.target.textContent ? event.target.textContent = member.name : console.log("nope"));
}, false);

console.log(cohort);
