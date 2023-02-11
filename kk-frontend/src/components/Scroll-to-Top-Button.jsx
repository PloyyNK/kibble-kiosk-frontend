import React from "react";
import '../styles/Scroll-To-Top-Button.css';
// import Button from "./Button";


const ScrollToTopButton = () => {
    return(
        // <ul>
            <button id="scroll-to-top-btn">Back To Home</button>
        // </ul>
    )
}

document.getElementById("scroll-to-top-btn").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

window.onscroll = function() {
    let btn = document.getElementById("scroll-to-top-btn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};


// const scrollTop = function () {
//     const scrollBtn = document.createElement("button");
//     scrollBtn.innerHTML = "&uarr;";
//     scrollBtn.setAttribute("id", "scroll-btn");
//     document.body.appendChild(scrollBtn);
//   };
//   scrollTop();



// const scrollBtnDisplay = function () {
//     window.scrollY > window.innerHeight
//       ? scrollBtn.classList.add("show")
//       : scrollBtn.classList.remove("show");
//   };
//   window.addEventListener("scroll", scrollBtnDisplay);  


// const scrollWindow = function () {  
//     if (window.scrollY != 0) {
//       setTimeout(function () {
//         window.scrollTo(0, window.scrollY - 50);
//         scrollWindow();
//       }, 10);
//     }
//   };
//   scrollBtn.addEventListener("click", scrollWindow);  


// let mybutton = document.getElementById("myBtn");
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

// const ScrollToTopButton = () => {
//     return(
//         <button onclick="topFunction()" id="myBtn">HOME</button>
//     )
// }


export default ScrollToTopButton;