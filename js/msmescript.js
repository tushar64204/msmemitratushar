// Add event listeners to navigation links
navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
	link.addEventListener('click', event => {
		event.preventDefault();
		const target = event.target.getAttribute('href');
		document.querySelector(target).scrollIntoView({
			behavior: 'smooth'
		});
	});
});

// Add form submission handler
const form = document.querySelector('form');
form.addEventListener('submit', event => {
	event.preventDefault();
	// Handle form submission logic here
	alert('Form submitted!');
});

    document.querySelectorAll('.service').forEach(service => {
        service.addEventListener('mouseover', function() {
            const iframe = this.querySelector('iframe');
            const iframeSrc = iframe.getAttribute('src');
            iframe.setAttribute('src', `${iframeSrc}&autoplay=1`);
        });

        service.addEventListener('mouseout', function() {
            const iframe = this.querySelector('iframe');
            const iframeSrc = iframe.getAttribute('src').replace('&autoplay=1', '');
            iframe.setAttribute('src', iframeSrc);
        });
    });



    document.querySelectorAll('.service').forEach(service => {
        service.addEventListener('mouseover', function() {
            const iframe = this.querySelector('iframe');
            const iframeSrc = iframe.getAttribute('src');
            iframe.setAttribute('src', `${iframeSrc}&autoplay=1`);
        });

        service.addEventListener('mouseout', function() {
            const iframe = this.querySelector('iframe');
            const iframeSrc = iframe.getAttribute('src').replace('&autoplay=1', '');
            iframe.setAttribute('src', iframeSrc);
        });
    });

	document.querySelectorAll('.details-title').forEach(detailsTitle => {
        detailsTitle.addEventListener('click', function() {
            const type = this.dataset.type;
            const content = this.parentElement.querySelector(`.${type}-content`);
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
    document.addEventListener('DOMContentLoaded', function() {
        const sections = document.querySelectorAll('header, section');
    
        window.addEventListener('scroll', function() {
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.5;
    
                if (sectionTop < screenPosition) {
                    section.classList.add('active');
                }
            });
        });
    });
    