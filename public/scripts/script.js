const navLinks = document.querySelectorAll('.nav-link')
const windowPathname = window.location.pathname;

navLinks.forEach(navLink => {
    if(navLink.href.includes(windowPathname.split('/')[1])) {
    navLink.classList.add('active');
}
});
