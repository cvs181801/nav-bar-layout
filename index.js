//grab elements off the DOM

const filterCursor = document.querySelector(".cursor");
const mainImageDiv = document.querySelector(".main__img");

mainImageDiv.addEventListener('mouseover', function(e) {
    e.preventDefault;
    filterCursor.style.top = e.pageY + "px";
    filterCursor.style.left = e.pageX +"px";
    //mainImageDiv.style.opacity = 1;
})