const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        //Animating links
        navLinks.forEach((link, index) =>{
        if(link.style.animation){
            link.style.animation = '';
        }   else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
        }
        });

        burger.classList.toggle('toggle');
    });
    
}

navSlide();

let h1tag = document.getElementById("h1tag");

//Handler executes when hovering over the h1 tag
h1tag.addEventListener("mouseenter", function( event ) {
  // highlight the mouseenter target
  event.target.style.color = "purple";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

h1tag.addEventListener("mouseover", function(event){
    event.target.style.color = "red";

    setTimeout(function(){
        event.target.style.color = "";
    }, 500);
}, false);


