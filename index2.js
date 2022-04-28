const heroSection = document.querySelector(".header");

// creating a sticky navbar component
// const observer = new IntersectionObserver((entries)=>{
//     const ent = entries[0];
//     // console.log(ent);
//     !ent.isIntersecting
//     ? document.body.classList.add("sticky")
//     : document.body.classList.remove("sticky");
// },{
//     root:null , 
//     threshold:0
// });
// observer.observe(heroSection);






// creating a responsive navbar component
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");
mobile_nav.addEventListener("click", () => {
    headerElem.classList.toggle("active");
});



// creating a portfolio tabbed component

// 


//media queries



// scroll to top button 
const footerElem = document.querySelector(".section-footer");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");
scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElem.after(scrollElement);

scrollTop = () =>{
    heroSection.scrollIntoView({behavior:"smooth"});
}
scrollElement.addEventListener("click",scrollTop);

//smooth scrolling effects


// animate number counts

// const counterNum = document.querySelectorAll(".counter-numbers");

// const speed = 200;

// counterNum.forEach((curElem) => {
//     const updateNumber = () => {
//         const targetNumber = parseInt(curElem.dataset.number);
//         // console.log(targetNumber);
//         const initialNum = parseInt(curElem.innerText);
//         // console.log(initialNum);

//         const incrementNum = Math.trunc(targetNumber/ speed);
//         // console.log(incrementNum);

//         if(initialNum<targetNumber){
//             curElem.innerText = `${initialNum + incrementNum}+`;
//             setTimeout(updateNumber,10);
//         }
//     };

//     updateNumber();
// });







