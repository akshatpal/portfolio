const heroSection = document.querySelector(".section-hero");

// creating a sticky navbar component
const observer = new IntersectionObserver((entries)=>{
    const ent = entries[0];
    // console.log(ent);
    !ent.isIntersecting
    ? document.body.classList.add("sticky")
    : document.body.classList.remove("sticky");
},{
    root:null , 
    threshold:0
});
observer.observe(heroSection);






// creating a responsive navbar component
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");
mobile_nav.addEventListener("click", () => {
    headerElem.classList.toggle("active");
});



// creating a portfolio tabbed component

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener('click',(e) => {
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);

    if(!p_btn_clicked.classList.contains("p-btn")){
        return;
    }
    p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

    p_btn_clicked.classList.add("p-btn-active");

    // to find the data attribute
    const btn_num = p_btn_clicked.dataset.btnNum;
    console.log(btn_num);
    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

    p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));
    img_active.forEach((curElem) => curElem.classList.remove("p-image-not-active"));
    
});

// swiper js

new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

//media queries

const myJsmedia = (widthSize) => {
    if(widthSize.matches){
        new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
        });
    }
    else{
        new Swiper(".mySwiper", {
            slidesPerView: 2,
            spaceBetween: 30,
        });
    }
}

const widthSize = window.matchMedia("(max-width: 780px)");

myJsmedia(widthSize);

widthSize.addEventListener("change",myJsmedia);

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

const portfolioSec = document.querySelector(".section-portfolio");
const contactSec = document.querySelector(".section-contact");


document.querySelector(".portfolio-link").addEventListener("click",() => {
    portfolioSec.scrollIntoView({behavior:"smooth"});

});

document.querySelector(".scroll-portfolio").addEventListener("click",() => {
    portfolioSec.scrollIntoView({behavior:"smooth"});

});
document.querySelector(".portfolio-link").addEventListener("click", () => {
    headerElem.classList.toggle("active");
});

document.querySelector(".hireme-btn").addEventListener("click" , () => {
    contactSec.scrollIntoView({ behavior:"smooth" });
});

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

const workSection = document.querySelector(".section-work-data");
const workObserver = new IntersectionObserver((entries,observer) => {
    const [entry] = entries;
    // console.log(entry);
    if(!entry.isIntersecting){
        return;
    }
    else{
        const counterNum = document.querySelectorAll(".counter-numbers");

        const speed = 200;

        counterNum.forEach((curElem) => {
            const updateNumber = () => {
                const targetNumber = parseInt(curElem.dataset.number);
                // console.log(targetNumber);
                const initialNum = parseInt(curElem.innerText);
                // console.log(initialNum);

                const incrementNum = Math.trunc(targetNumber/ speed);
                // console.log(incrementNum);

                if(initialNum<targetNumber){
                    curElem.innerText = `${initialNum + incrementNum}+`;
                    setTimeout(updateNumber,10);
                }
            };

            updateNumber();
        });
        observer.unobserve(workSection);
    }
},{
    root:null,
    threshold:0,
});

workObserver.observe(workSection);

// lazy loading images

const imgRef = document.querySelector("img[data-src]");

const lazyImg = (entries) => {
    const [entry] = entries;
    // console.log(entry);
    if(!entry.isIntersecting){
        return;
    }
    else{
        entry.target.src = imgRef.dataset.src;
    }
};
const imgObserver = new IntersectionObserver(lazyImg,{
    root:null,
    threshold:0,
});
imgObserver.observe(imgRef);








