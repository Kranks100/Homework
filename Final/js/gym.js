let reset = () => 
{
    document.getElementById("fname").value = ' ';
    document.getElementById("lname").value = ' ';
    document.getElementById("email").value = ' ';
    document.getElementById("phone").value = ' ';

}

let gat = () => 
{
    const val =
    [
        document.getElementById("fname"),
        document.getElementById("lname"),
        document.getElementById("phone"),
        document.getElementById("email")
    ];

    const valName = ["First Name", "Last Name", "E-mail", "Phone"];

    for(i = 0; i < val.length; i++)
    {
        reset();
        
    }
    alert("Submission Success! Welcome to our gym!")
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) 
{
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    if(n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}