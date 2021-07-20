//grab elements off the DOM

let filterCursor = document.querySelector(".cursor");
const mainImageDiv = document.querySelector(".main__img");

console.log(filterCursor);
console.log(mainImageDiv);

// mainImageDiv.addEventListener('mouseover', function(e) {
    
//     e.preventDefault;
//     filterCursor.style.top = e.pageY + 1 + "px";
//     filterCursor.style.left = e.pageX + "px";
   
// })

document.getElementById("main__img").onmousemove = filterCursor.mouseMove;

filterCursor.mouseMove = function(mouseMovement) {
    filterCursor = document.querySelector(".cursor");
    let xPosition;
    let yPosition;
    if(mouseMovement) {
        xPosition = mouseMovement.pageX;
        yPosition = mouseMovement.pageY;
        filterCursor.style.top = yPosition + 1 + "px";
        filterCursor.style.left = xPosition + "px";
    }
}