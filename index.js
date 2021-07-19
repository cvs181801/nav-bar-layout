//grab elements off the DOM

const filterCursor = document.querySelector(".cursor");
const mainImageDiv = document.querySelector(".main__img");

console.log(filterCursor);
console.log(mainImageDiv);

filterCursor.addEventListener('mouseover', function(e) {
    e.preventDefault;
    filterCursor.style.top = e.pageY + 1 + "px";
    filterCursor.style.left = e.pageX + "px";
    filterCursor.style.filter = "brightness(0.4)";
})