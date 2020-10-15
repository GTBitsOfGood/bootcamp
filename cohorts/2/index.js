function Member(name, fun_fact) {
    this.name = name;
    this.fun_fact = fun_fact;
}

const member1 = new Member("lidya", "favorite book: Classics of Western Philosophy");
const member2 = new Member("alice", "wears lolita-fashion casually");
const member3 = new Member("seife", "has over 500 connections on LinkedIn");
const member4 = new Member("shree", "can speak 4 different languages: English, French, Hindu, Kannada");
const member5 = new Member("evan", "connoisseur of water");
const member6 = new Member("vivian", "I paint Warhammer minis as a hobby");

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

console.log(cohort);
