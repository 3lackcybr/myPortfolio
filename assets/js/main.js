/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".skill-progress");
  
    progressBars.forEach(bar => {
      const value = bar.getAttribute("data-progress");
      bar.style.width = value + "%";
    });
  });
  
  
/*==================== NIGHT/LIGHT MODE ====================*/
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    const html = document.documentElement; // Changed from document.body to html
    
    // Check for saved preference or system preference
    const currentTheme = localStorage.getItem('theme') || 
                        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Apply the current theme
    if (currentTheme === 'dark') {
        html.setAttribute('data-theme', 'dark'); // Changed from classList to dataset
        icon.classList.replace('fa-moon', 'fa-sun');
    }
    
    // Toggle between themes
    themeToggle.addEventListener('click', function() {
        const currentTheme = html.getAttribute('data-theme');
        
        if (currentTheme === 'dark') {
            html.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            icon.classList.replace('fa-sun', 'fa-moon');
        } else {
            html.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            icon.classList.replace('fa-moon', 'fa-sun');
        }
        
        console.log('Theme toggled to:', html.getAttribute('data-theme') || 'light');
    });
});

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

document.getElementById('serviceForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.name.value;
    const email = this.email.value;
    const message = this.message.value;
    
    // Create mailto link
    const subject = `Service request from ${name}`;
    const body = `From: ${name} (${email})\n\n${message}`;
    
    // Open email client
    window.location.href = `mailto:alphoncemrisi@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Clear the form
    this.reset();
    
    // Show confirmation message
    const formResponse = document.getElementById('formResponse');
    formResponse.textContent = "Thank you! Your message has been prepared in your email client.";
    formResponse.style.color = "green";
    
    // Optional: Clear message after 5 seconds
    setTimeout(() => {
        formResponse.textContent = "";
    }, 5000);
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
