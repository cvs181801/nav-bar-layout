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
const redBtn = document.getElementById("redbutton");
const homeGrayImg = document.querySelector(".main__img");
const modalBackground = document.querySelector(".modal__backgrnd");
const valueBuilders = document.getElementById("value__build__contain");

//test area

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

//create a way to identify where the red contact us button should be positioned on each page.

let about = "/Users/casvalkyriespicer/Documents/GitHub/nav-bar-layout/about.html";
let home = "/Users/casvalkyriespicer/Documents/GitHub/nav-bar-layout/index.html";
let why = "/Users/casvalkyriespicer/Documents/GitHub/nav-bar-layout/whyyouneed.html";
let meet = "/Users/casvalkyriespicer/Documents/GitHub/nav-bar-layout/meettheteam.html";
let blog = "/Users/casvalkyriespicer/Documents/GitHub/nav-bar-layout/blog.html";
let contact = "/Users/casvalkyriespicer/Documents/GitHub/nav-bar-layout/contactus.html";

let redBtnLocation = {
    home: "19em",
    about: "20.5em",
    why: "18.5em",
    meet: "20em",
    blog: "20em",
    contact: "19.5em",
}

function RedBtnLocation(location, left) {
    this.location = location,
    this.left = left;
}

let homeLocation = new RedBtnLocation(home, "19em");
console.log(homeLocation);


//make the navbar highlight the page the user is currently on 

const currentLocation = location.href;
let anchorArray = document.querySelectorAll('a');
const navBarLength = anchorArray.length;
for(let i = 0; i < navBarLength; i++ ) {
   if(anchorArray[i].href === currentLocation) {
    anchorArray[i].className = "active";
   }
}

console.log(anchorArray[0]);

//make the nav bar open and close

hamburger.addEventListener('click', function(e) {
    if (navBar.classList.contains("open") && anchorArray[i].href === currentLocation) {
            e.preventDefault();
            navBar.classList.remove("open");
            hamBar1.classList.remove("change");
            hamBar2.classList.remove("change");
            hamBar3.classList.remove("change");
            mainDiv.classList.remove("shift");
            hamburger.classList.remove("shift");
            valueBuilders.style.left = "16em";
            redBtn.style.left = "19em";
    } else {
            e.preventDefault();
            navBar.classList.add("open");
            hamBar1.classList.add("change");
            hamBar2.classList.add("change");
            hamBar3.classList.add("change");
            mainDiv.classList.add("shift");
            hamburger.classList.add("shift");
            valueBuilders.style.left = "24em";
            redBtn.style.left = "23em";
    }
})

//make the modal buttons work. 

redBtn.addEventListener('click', function(e) {
    e.preventDefault();
    valueBuilders.style.display = "none";
    modalBackground.style.backgroundColor = "white";
    modalBackground.style.backgroundImage = "url('/Users/casvalkyriespicer/Documents/GitHub/nav-bar-layout/pics/cyber1.jpeg')";
    modalElements.forEach( element => {
        element.classList.toggle('modal__toggle');
    })
})

emailCollector.addEventListener('submit', function(e) {
    e.preventDefault();
    let ourFormData = new FormData(e.target);
    const userName = ourFormData.get("name");
    const userEmailAddress = ourFormData.get("emailAddress");
    const updatedHTML = `<h1 class="secondary-header">Thank you, ${userName}!</h1>
           <h2> We'll reach out to you shortly to schedule your FREE consultation. <br>
           We're looking forward to helping you stay <strong>Cyber Strong</strong>.</h2>
           <p class="fine__print">You'll receive a scheduling invitation link via email at: ${userEmailAddress}.</p>
           <p class="fine__print"> Don't forget to check your spam folder - sometimes our emails go there. </p>
           <p><a id="close__link" href="javascript:location.reload(true)"><strong>CLOSE</strong></a></p>`;
        //    const closeLink = document.getElementById("close__link");
        //    closeLink.style.color = "black";
        let mainContent = document.querySelector(".modal__div");
        mainContent.innerHTML = updatedHTML;   
        
})

closeModalbtn.addEventListener('click', function(e) {
    e.preventDefault();
    valueBuilders.style.display = "grid";
    modalElements.forEach( element => {
        element.classList.toggle('modal__toggle');
    })
})