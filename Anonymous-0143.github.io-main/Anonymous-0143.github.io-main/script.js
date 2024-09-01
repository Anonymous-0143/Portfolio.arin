document.addEventListener('DOMContentLoaded', function() {
    // Navigation scroll smooth
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation (basic example)
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let valid = true;
        const inputs = form.querySelectorAll('input, textarea');

        inputs.forEach(input => {
            if (input.value.trim() === '') {
                valid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '#ddd';
            }
        });

        if (valid) {
            alert('Form submitted successfully!');
            form.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
});
