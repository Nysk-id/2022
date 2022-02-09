/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// scroll reveal animation 
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true,
})

sr.reveal('user_info')
sr.reveal('user_img', { delay: 500, origin: 'right' })

// asojaddojadojadoj

var password;
var pass1 = "051128";
password = prompt('Input the password for surfing the web', '');
if (password == pass1) alert('Success');
else {
    window.location = "https://izzatwt.netlify.app/";
}