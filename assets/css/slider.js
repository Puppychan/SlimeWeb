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