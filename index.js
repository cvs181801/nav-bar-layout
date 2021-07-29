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

let about = "file:///Users/casvalkyriespicer/Documents/GitHub/nav-bar-layout/about.html";
let home = "file:///Users/casvalkyriespicer/Documents/GitHub/nav-bar-layout/index.html";
let why = "file:///Users/casvalkyriespicer/Documents/GitHub/nav-bar-layout/whyyouneed.html";
let meet = "file:///Users/casvalkyriespicer/Documents/GitHub/nav-bar-layout/meettheteam.html";
let blog = "file:///Users/casvalkyriespicer/Documents/GitHub/nav-bar-layout/blog.html";
let contact = "file:///Users/casvalkyriespicer/Documents/GitHub/nav-bar-layout/contactus.html";

// let redBtnLocation = {
//     home: "19em",
//     about: "20.5em",
//     why: "18.5em",
//     meet: "20em",
//     blog: "20em",
//     contact: "19.5em",
// }

function RedBtnLocation(location, left) {
    this.location = location,
    this.left = left;
}

let homeLocation = new RedBtnLocation(home, "19em");
let aboutLocation = new RedBtnLocation(about, "20.5em");
let whyLocation = new RedBtnLocation(why, "18.5em");
let meetLocation = new RedBtnLocation(meet, "20em");
let blogLocation = new RedBtnLocation(blog, "20em");
let contactLocation = new RedBtnLocation(contact, "19.5em");

RedBtnLocation.prototype.posL = function() {
    return `${this.left}`;
} 

console.log(homeLocation.posL());
console.log(aboutLocation.posL());
console.log(whyLocation.posL());
console.log(meetLocation.posL());
console.log(blogLocation.posL());
console.log(contactLocation.posL());

//make the navbar highlight the page the user is currently on 

const currentLocation = location.href;
let anchorArray = document.querySelectorAll('a');
const navBarLength = anchorArray.length;
for(let i = 0; i < navBarLength; i++ ) {
   if(anchorArray[i].href === currentLocation) {
    anchorArray[i].className = "active";
   }
}

console.log(home);

//make the nav bar open and close

// hamburger.addEventListener('click', function(e) {
//     if (navBar.classList.contains("open")) {
//             e.preventDefault();
//             navBar.classList.remove("open");
//             hamBar1.classList.remove("change");
//             hamBar2.classList.remove("change");
//             hamBar3.classList.remove("change");
//             mainDiv.classList.remove("shift");
//             hamburger.classList.remove("shift");
//             valueBuilders.style.left = "16em";
//             redBtn.style.left = "19em";
//     } else {
//             e.preventDefault();
//             navBar.classList.add("open");
//             hamBar1.classList.add("change");
//             hamBar2.classList.add("change");
//             hamBar3.classList.add("change");
//             mainDiv.classList.add("shift");
//             hamburger.classList.add("shift");
//             valueBuilders.style.left = "24em";
//             redBtn.style.left = "23em";
//     }
// })

hamburger.addEventListener('click', function(e) {
    console.log(home);
    console.log(currentLocation);
        if (navBar.classList.contains("open")) {
            e.preventDefault();
            navBar.classList.remove("open");
            hamBar1.classList.remove("change");
            hamBar2.classList.remove("change");
            hamBar3.classList.remove("change");
            mainDiv.classList.remove("shift");
            hamburger.classList.remove("shift");
            valueBuilders.style.left = "16em";
            redBtn.style.left = "19em";
        } else if (currentLocation === home) {
            e.preventDefault();
            navBar.classList.add("open");
            hamBar1.classList.add("change");
            hamBar2.classList.add("change");
            hamBar3.classList.add("change");
            mainDiv.classList.add("shift");
            hamburger.classList.add("shift");
            valueBuilders.style.left = "24em";
            redBtn.style.left = homeLocation.posL();
        } else if (currentLocation === about) {
            e.preventDefault();
            navBar.classList.add("open");
            hamBar1.classList.add("change");
            hamBar2.classList.add("change");
            hamBar3.classList.add("change");
            mainDiv.classList.add("shift");
            hamburger.classList.add("shift");
            valueBuilders.style.left = "24em";
            redBtn.style.left = aboutLocation.posL();
        } else if (currentLocation === why) {
            e.preventDefault();
            navBar.classList.add("open");
            hamBar1.classList.add("change");
            hamBar2.classList.add("change");
            hamBar3.classList.add("change");
            mainDiv.classList.add("shift");
            hamburger.classList.add("shift");
            valueBuilders.style.left = "24em";
            redBtn.style.left = whyLocation.posL();
        } else if (currentLocation === meet) {
            e.preventDefault();
            navBar.classList.add("open");
            hamBar1.classList.add("change");
            hamBar2.classList.add("change");
            hamBar3.classList.add("change");
            mainDiv.classList.add("shift");
            hamburger.classList.add("shift");
            valueBuilders.style.left = "24em";
            redBtn.style.left = meetLocation.posL();
        } else if (currentLocation === blog) {
            e.preventDefault();
            navBar.classList.add("open");
            hamBar1.classList.add("change");
            hamBar2.classList.add("change");
            hamBar3.classList.add("change");
            mainDiv.classList.add("shift");
            hamburger.classList.add("shift");
            valueBuilders.style.left = "24em";
            redBtn.style.left = blogLocation.posL();
        } else if (currentLocation === contact) {
            e.preventDefault();
            navBar.classList.add("open");
            hamBar1.classList.add("change");
            hamBar2.classList.add("change");
            hamBar3.classList.add("change");
            mainDiv.classList.add("shift");
            hamburger.classList.add("shift");
            valueBuilders.style.left = "24em";
            redBtn.style.left = contactLocation.posL(); 
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