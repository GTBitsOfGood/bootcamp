console.log("hello")

function Cohort(name, motto) {
    this.name = name;
    this.motto = motto
}
const myCohort = {
    name: 'Corgi',
    motto: 'Woof! XOXO',

}
function Members(name, funFact) {
    this.name = name;
    this.motto = funFact;

}

const myMember1 = {
    name: 'Rita',
    funFact: 'I like building Legos'
}

const myMember2 = {
    name: 'Lyann',
    funFact: "I hate boba or any kind of tea"
}

const myMember3 = {
    name: 'Anusha',
    funFact: ""
}

const myMember4 = {
    name: 'Fareeda',
    funFact: ""
}

document.getElementById("title").innerHTML = "COHORT CORGI";
var str = "Motto:";
document.getElementById("motto").innerHTML = str.bold() + " Woof! XOXO";
document.getElementById("images").getElementsByClassName("caption")[0].innerHTML = "Fareeda";
document.getElementById("images").getElementsByClassName("caption")[1].innerHTML = "Lyann";
document.getElementById("images").getElementsByClassName("caption")[2].innerHTML = "Kimberly";
document.getElementById("images").getElementsByClassName("caption")[3].innerHTML = "Anusha";
document.getElementById("images").getElementsByClassName("caption")[4].innerHTML = "Rita";
document.getElementById("images").getElementsByClassName("caption")[5].innerHTML = "Shruthi";




console.log(myCohort)
console.log(myMember1)
console.log(myMember2)
