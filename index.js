//grab elements off the DOM

let filterCursor = document.querySelector(".cursor");
const mainImageDiv = document.querySelector(".main__img");
const valueBuilder = document.querySelectorAll(".value__build");

console.log(filterCursor);
console.log(mainImageDiv);

window.addEventListener("mousemove", cursor);

//make the cursor work
function cursor(e) {
    filterCursor.style.top = e.pageY + 'px';
    filterCursor.style.left = e.pageX + 'px';
}

//make the cursor grow and the colors change when hovering over the value builders
valueBuilder.forEach(div => {
    div.addEventListener('mouseleave', () => {
        classList.remove("link__grow");
    });
    div.addEventListener('mouseover', () => {
        classList.add("link__grow");
    });
});