function cohort(name, motto, memberList) {
    this.name = name;
    this.motto = motto;
    this.memberList = [member('Emily', 'sdfnjkn'), member('Carsen', "I'm a fencer, so you better vote for us!"),
        member('Eashan', "sjad"), member('Marlene', "asjdsnjand")]

}

function member(name, funFact) {
    this.name = name;
    this.funFact = funFact;
}

const myCohortName = document.getElementById('myCohortName')
myCohortName.innerHTML = "HyperText Assassins"
console.log(myCohortName.innerHTML)

const myCohortMotto = document.getElementById('myCohortMotto')
myCohortMotto.innerHTML = "Sparking joy one flame at a time \(^ヮ^)/"
console.log(myCohortMotto.innerHTML)


const myCohortMembers = document.getElementsByClassName('members')
for(let i = 0; i < myCohortMembers.length; i++) {
    var members = myCohortMembers[i]
    console.log(members.innerText)
}
 


