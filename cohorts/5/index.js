document.getElementById("hmotto").innerHTML = "TFE's Motto";
document.getElementById("motto").innerHTML = "I am the gatekeeper of my own destiny, and I will have my glory day in the hot sun.";

document.getElementById("Madeline").onclick = function madOnClick() {
    const fact = document.createElement("div");
    const info = document.createTextNode('"I think sequels are better than originals"');
    fact.appendChild(info);
    const name = document.getElementById("madCont");
    const jasmine = document.getElementById("madName");
    name.insertBefore(fact, jasmine);
}

document.getElementById("Jasmine").onclick = function jasOnClick() {
    const fact = document.createElement("div");
    const info = document.createTextNode('"I think all lives matter"');
    fact.appendChild(info);
    const name = document.getElementById("jasCont");
    const jasmine = document.getElementById("jasName");
    name.insertBefore(fact, jasmine);
}

document.getElementById("Carlo").onclick = function carloOnClick() {
    const fact = document.createElement("div");
    const info = document.createTextNode('"I have seen Nacho Libre double digit times"');
    fact.appendChild(info);
    const name = document.getElementById("carCont");
    const jasmine = document.getElementById("carName");
    name.insertBefore(fact, jasmine);
}

document.getElementById("Sahya").onclick = function sahyOnClick() {
    const fact = document.createElement("div");
    const info = document.createTextNode('"I hate puppies"');
    fact.appendChild(info);
    const name = document.getElementById("sahCont");
    const jasmine = document.getElementById("sahName");
    name.insertBefore(fact, jasmine);
}