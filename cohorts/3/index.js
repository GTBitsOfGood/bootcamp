console.log("hello")

function Cohort(name, motto) {
    this.name = name;
    this.motto = motto
}
const myCohort = {
    name: 'Corgi',
    motto: 'Woof! XOXO   HELLO',

}
function Members(name, funFact) {
    this.name = name;
    this.motto = funFact;

}

function randomPerson() {
    document.getElementById("images").innerHTML = "";
    const person1 = `
    <div class = "items1" onClick = "funfact1()">
        <img class = "profile" src = "https://i.pinimg.com/originals/5b/e8/4f/5be84f684cb91a9783116073ba0d740a.jpg">
        <p class = "caption"> Fareeda </p>
    </div>`;
    const person2 = `
    <div class = "items2" onClick = "funfact3()">
        <img class = "profile" src = "https://i.redd.it/7zqw8y5v9vg11.jpg">
        <p class = "caption"> Lyann </p>
    </div>`;
    const person3 = `
    <div class = "items3" onClick = "funfact4()">
        <img class = "profile" src = "https://static.boredpanda.com/blog/wp-content/uploads/2018/05/funny-corgis-cute-dogs-17-5afbf59b75e0e__700.jpg">
        <p class = "caption"> Anusha </p>
    </div>`;
    const person4 = `
    <div class = "items4" onClick = "funfact5()">
        <img class = "profile" src = "https://emwng.com/wp-content/uploads/2018/07/emwng_18581079_183275692200240_766018451012583424_n.jpg">
        <p class = "caption"> Kimberly </p>
    </div>`;
    const person5 = `
    <div class = "items5" onClick = "funfact2()">
        <img class = "profile" src = "https://heydjangles.com/wp-content/uploads/2019/09/cute-corgi-puppy-dog.jpg">
        <p class = "caption"> Rita </p>
    </div>`;
    const person6 = `
    <div class = "items6" onClick = "funfact6()">
        <img class = "profile" src = "https://static.boredpanda.com/blog/wp-content/uploads/2018/05/funny-corgis-cute-dogs-17-5afbf59b75e0e__700.jpg">
        <p class = "caption"> Shruthi </p>
    </div>`;

    var myArray = [person1, person2, person3, person4, person5, person6];
    const random = Math.floor(Math.random() * myArray.length);
    document.getElementById("images").innerHTML = myArray[random];
}

function funfact1() {
    var div = document.createElement('div');
    div.setAttribute('class', 'fact');
    div.innerHTML = myMember4.funFact;
    document.getElementById("images").appendChild(div);
}

function funfact2() {
    var div = document.createElement('div');
    div.setAttribute('class', 'fact');
    div.innerHTML = myMember1.funFact;
    document.getElementById("images").appendChild(div);
}

function funfact3() {
    var div = document.createElement('div');
    div.setAttribute('class', 'fact');
    div.innerHTML = myMember2.funFact;
    document.getElementById("images").appendChild(div);
}

function funfact4() {
    var div = document.createElement('div');
    div.setAttribute('class', 'fact');
    div.innerHTML = myMember3.funFact;
    document.getElementById("images").appendChild(div);
}

function funfact5() {
    var div = document.createElement('div');
    div.setAttribute('class', 'fact');
    div.innerHTML = myMember5.funFact;
    document.getElementById("images").appendChild(div);
}

function funfact6() {
    var div = document.createElement('div');
    div.setAttribute('class', 'fact');
    div.innerHTML = myMember6.funFact;
    document.getElementById("images").appendChild(div);
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
    funFact: "I am obsessed with Netflix!"
}

const myMember4 = {
    name: 'Fareeda',
    funFact: "I might be obsessed with chocolate drinks"
}

const myMember5 = {
    name: 'Kimberly',
    funFact: "I love BTS!"
}

const myMember6 = {
    name: 'Shruthi',
    funFact: "Mountainclimbing rocks!"
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
console.log(myMember4)
