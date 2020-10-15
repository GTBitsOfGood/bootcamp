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

// extra stuff

const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
 
/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
         
        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<i class=’fas fa-bars’></i>";
    } else {
        menu.classList.add("active");
         
        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = "<i class=’fas fa-times’></i>";
    }
}
 
/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);

const items = document.querySelectorAll(".item");
 
/* Activate Submenu */
function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}
 
/* Event Listeners */
for (let item of items) {
    if (item.querySelector(".submenu")) {
      item.addEventListener("click", toggleItem, false);
      item.addEventListener("keypress", toggleItem, false);
    }   
}

/* Close Submenu From Anywhere */
function closeSubmenu(e) {
  let isClickInside = menu.contains(e.target);
 
  if (!isClickInside && menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
  }
}
 
/* Event listener */
document.addEventListener("click", closeSubmenu, false);
 


