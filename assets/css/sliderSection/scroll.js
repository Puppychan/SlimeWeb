let slider = document.getElementById("slider");

slideScrollStyle = new SlideObject("/assets/img/slider/sliderScroll.jpeg",
    "radial-gradient(circle, rgba(241,227,142,0.4038209033613446) 0%, rgba(63,143,116,0.4038209033613446) 30%, rgba(10,20,41,0.9024203431372549) 74%)",
    "リムル゠テンペスト","");

let slideScroll = document.createElement("div");
slideScroll.setAttribute("class", "slide scroll-fade");
slideScroll.setAttribute("id", "slide-scroll");
slideScroll.style.background = " " + slideScrollStyle;
slideScroll.style.backgroundSize = "30% 30%";

let slideScrollHeader = document.createElement("h3");
slideScrollHeader.setAttribute("class", "slide-scroll__header");
slideScrollHeader.innerHTML = slideScrollStyle.h3;


slideScroll.append(slideScrollHeader);
slider.prepend(slideScroll);



// let slides = document.getElementsByClassName('js__slide');
scrollDown();

function scrollDown() {
    let oldY = 0;
    let newY = 0;
    window.addEventListener("scroll", (e) => {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            slideScroll.style.backgroundSize = "100% 100%";
        }
        
    });
}