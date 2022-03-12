let slider = document.getElementById("slider");

slideScrollStyle = new SlideObject("/assets/img/slider/sliderScroll.jpeg",
    "radial-gradient(circle, rgba(241,227,142,0.4038209033613446) 0%, rgba(63,143,116,0.4038209033613446) 30%, rgba(10,20,41,0.9024203431372549) 74%)",
    "リムル゠テンペスト","");

const defaultBackgroundSize = "0% 0%";

let slideScroll = document.createElement("div");
slideScroll.setAttribute("class", "slide");
slideScroll.setAttribute("id", "slide-scroll");
slideScroll.style.background = " " + slideScrollStyle;
slideScroll.style.backgroundSize = defaultBackgroundSize;

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
            slideScroll.style.backgroundSize = "150% 150%";
            slideScroll.style.filter = "brightness(75%)";
            slideScroll.style.opacity = "0.4";
            slideScroll.style.zIndex = "2";

            // cannot use classList because .style have higher predence
            // slideScroll.classList.add("scroll-fade");
        }
        else {
            slideScroll.style.backgroundSize = defaultBackgroundSize;
            slideScroll.style.filter = "brightness(100%)";
            slideScroll.style.zIndex = "1";
            slideScroll.style.opacity = "1";
            // slideScroll.classList.remove("scroll-fade");
        }
    });
}