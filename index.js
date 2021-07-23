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
const hamburgerShift = document.querySelector(".shift");

console.log(hamburgerShift);


window.addEventListener("mousemove", cursor);

//make the cursor work
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
    e.preventDefault;
    navBar.classList.add("open");
    hamBar1.classList.add("change");
    hamBar2.classList.add("change");
    hamBar3.classList.add("change");
    mainDiv.classList.add("shift");
    valueBuildContainer.classList.add("shift");
    hamburger.classList.add("shift");
    //hamBar1.classList.add("shift");
    //hamBar2.classList.add("shift");
})

hamburgerShift.addEventListener("click", function(e) {
    e.preventDefault;
    navBar.classList.remove("open");
    hamBar1.classList.remove("change");
    hamBar2.classList.remove("change");
    hamBar3.classList.remove("change");
    mainDiv.classList.remove("shift");
    valueBuildContainer.classList.remove("shift");
    hamburgerShift.classList.remove("shift");
})