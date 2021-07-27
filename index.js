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
const menuItem = document.querySelectorAll("a");
const growWhy = document.querySelectorAll("#why");
const submitBtn = document.querySelector(".submit__button");
const closeModalbtn = document.querySelector(".close");
const modalElements = document.querySelectorAll(".modal__toggle");
const emailCollector = document.getElementById("Email__Collector");
const redBtnHome = document.querySelector(".red__btn__home");
const homeGrayImg = document.querySelector(".main__img");
const modalBackground = document.querySelector(".modal__backgrnd");

console.log(redBtnHome);
console.log(modalElements);

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

//make the cursor grow and the colors change when hovering over the titles on the 'why cyber security' page
growWhy.forEach(title => {
    title.addEventListener('mouseleave', () => {
        filterCursor.classList.remove("link__grow");
    });
    title.addEventListener('mouseover', () => {
        filterCursor.classList.add("link__grow");
    })
})

//make the nav bar open and close

hamburger.addEventListener('click', function(e) {
    if (navBar.classList.contains("open")) {
            e.preventDefault();
            navBar.classList.remove("open");
            hamBar1.classList.remove("change");
            hamBar2.classList.remove("change");
            hamBar3.classList.remove("change");
            mainDiv.classList.remove("shift");
            hamburger.classList.remove("shift");
    } else {
            e.preventDefault();
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
console.log("anchorArray:", anchorArray);
const navBarLength = anchorArray.length;
for(let i = 0; i < navBarLength; i++ ) {
   if(anchorArray[i].href === currentLocation) {
    anchorArray[i].className = "active";
   }
}

//make the modal buttons work

redBtnHome.addEventListener('click', function(e) {
    e.preventDefault();
    //homeGrayImg.style.backgroundColor = "#edeff3";
    modalBackground.style.backgroundImage = "url('/Users/casvalkyriespicer/Documents/GitHub/nav-bar-layout/pics/cyber1.jpeg')";
    console.log("red btn worked!");
    modalElements.forEach( element => {
        element.classList.toggle('modal__toggle');
    })
        // for(let i = modalElements.length - 1; i > 0; i--) {
        //     modalElements.classList.remove(".modal__toggle");
        // }
})