const navLinks = document.querySelectorAll('#navMenu a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        let target = this.getAttribute('href');
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth'
        });
    });
});