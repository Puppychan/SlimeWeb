// create slide constructor
function SlideObject(imgUrl, gradient, h3, p) {
    this.imgUrl = imgUrl;
    this.gradient = gradient;
    this.h3 = h3;
    this.p = p;

    // override toString
    SlideObject.prototype.toString = function() {
        return this.gradient + 'center / cover  no-repeat,' + 'url("' + this.imgUrl + '") center / cover  no-repeat';
        // return this.gradient + ', url("' + this.imgUrl + '")';
    };
}
// declare object
const arr = [
    new SlideObject('/assets/img/slider/slider1.jpeg',
            "radial-gradient(circle, rgba(241,227,142,0.4038209033613446) 0%, rgba(63,143,116,0.4038209033613446) 30%, rgba(10,20,41,0.9024203431372549) 74%)",
            "Rimuru Tempest",
            "Main, a slime, and a previous human"),
    new SlideObject('/assets/img/slider/slider2.jpeg',
            "radial-gradient(circle, rgba(241,227,142,0.4038209033613446) 0%, rgba(63,143,116,0.4038209033613446) 40%, rgba(10,20,41,0.9024203431372549) 97%)",
            "Rimuru And Friend",
            "King and government of Jura Tempest Federation"),
    new SlideObject('/assets/img/slider/slider3.jpeg',
            "linear-gradient(40deg, rgba(241,227,142,0.4038209033613446) 0%, rgba(63,143,116,0.4038209033613446) 46%, rgba(10,20,41,0.9024203431372549) 88%)",
            "Jura Tempest Federation",
            "View of Monster Federation viewed from sky")
];


let parrent = document.getElementById("slider");
for (let aSlideStyle of arr) {
    let aSlide = document.createElement("div");
    
    // this method for adding only 1 class name
    // aSlide.className = "js__slide";
    aSlide.setAttribute("class", "js__slide slide fade");
    aSlide.style.background = " " + aSlideStyle;


    let aSlideContent = document.createElement("div");
    aSlideContent.setAttribute("class", "slide__content");
    
    let aSlideContentHeader = document.createElement("h3");
    aSlideContentHeader.setAttribute("class", "slide__content-header");
    aSlideContentHeader.innerHTML = aSlideStyle.h3;
    
    let aSlideContentText = document.createElement("p");
    aSlideContentText.setAttribute("class", "slide__content-text");
    aSlideContentText.innerHTML = aSlideStyle.p;
    
    aSlideContent.appendChild(aSlideContentHeader);
    aSlideContent.appendChild(aSlideContentText);
    aSlide.appendChild(aSlideContent);
    parrent.prepend(aSlide);
    // document.getElementById("slider").appendChild(aSlide);
    // $(".js__slider").appendChild(aSlide);

}



// for changing slides on slider
let slideIndex = 0;
changeSlide();

function changeSlide() {
    let slides = document.getElementsByClassName('js__slide');

    // undisplay all slides b/f displaying next slide
    for (i = 0; i < slides.length; i ++) 
        slides[i].style.display = "none";

    // change to next slide
    slideIndex ++;
    if (slideIndex >= slides.length) slideIndex = 0;

    slides[slideIndex].style.display = "block";

    // 2s for changing slide
    setTimeout(changeSlide, 2000);
}