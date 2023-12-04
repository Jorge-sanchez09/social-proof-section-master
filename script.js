const grid = document.querySelector(".testimonials");
const testimonials = grid.querySelectorAll(".testimonial");

function setTestimonialsPos(){
    const columns = window.getComputedStyle(grid).getPropertyValue("grid-template-columns").split(" ").length;

    for(i = 0, offsetY = 1; i < testimonials.length; i++){
        if(i != 0){
            testimonials[i].style.transform = (columns == 3) ? `translateY(${offsetY}em)` : "translateY(0)";
            offsetY++;
        }
    }
}

window.addEventListener("resize", setTestimonialsPos);

setTestimonialsPos();