//grab elements off the DOM

let filterCursor = document.querySelector(".cursor");
const mainImageDiv = document.querySelector(".main__img");
const valueBuilder = document.querySelectorAll(".value__build");
const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav__bar");
const hamBar1 = document.querySelector(".first__bar");
const hamBar2 = document.querySelector(".second__bar");
const hamBar3 = document.querySelector(".third__bar");
const mainDiv = document.querySelector(".main__div");
const valueBuildContainer = document.querySelector(".value__build__contain");
const menuItem = document.querySelectorAll("a");

//make the cursor work
window.addEventListener("mousemove", cursor);

function cursor(e) {
    filterCursor.style.top = e.pageY + 'px';
    filterCursor.style.left = e.pageX + 'px';
}

//make the cursor grow and the colors change when hovering over the red "value builders"
valueBuilder.forEach(div => {
    div.addEventListener('mouseleave', () => {
        filterCursor.classList.remove("link__grow");
    });
    div.addEventListener('mouseover', () => {
        filterCursor.classList.add("link__grow");
    });
});


//make the nav bar open and close

hamburger.addEventListener('click', function(e) {
    if (navBar.classList.contains("open")) {
            e.preventDefault;
            navBar.classList.remove("open");
            hamBar1.classList.remove("change");
            hamBar2.classList.remove("change");
            hamBar3.classList.remove("change");
            mainDiv.classList.remove("shift");
            hamburger.classList.remove("shift");
    } else {
            e.preventDefault;
            navBar.classList.add("open");
            hamBar1.classList.add("change");
            hamBar2.classList.add("change");
            hamBar3.classList.add("change");
            mainDiv.classList.add("shift");
            hamburger.classList.add("shift");
    }
})

//make the navbar highlight the page the user is currently on
const currentLocation = location.href;
let anchorArray = document.querySelectorAll('a');
let navBarArray = document.querySelector(".navbar__child");
let navBarArray = [...anchorArray];
console.log(navBarArray);
const navBarLength= navBarArray.length;
for(let i = 0; i < navBarLength; i++ ) {
   if(navBarArray[i].href === currentLocation) {
       console.log("we are on the current href");
    //navBarArray[i].className.add = "active";
   }
}

//this isn't yet working *** make the value builders shift on the home page when navbar pops out
hamburger.addEventListener('click', function(e) {
    console.log("value builders e listener worked")
    // const home = "/Users/casvalkyriespicer/Documents/GitHub/nav-bar-layout/index.html";
    // if (currentLocation === home && navBar.classList.contains("open")) {
    //     e.preventDefault;
    //     valueBuildContainer.classList.remove("shift");
    // } else {
    //     e.preventDefault;
    //     valueBuildContainer.classList.add("shift");
    // }
})    
