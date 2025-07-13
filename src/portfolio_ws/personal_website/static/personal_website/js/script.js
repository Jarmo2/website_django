document.addEventListener('DOMContentLoaded', function() {
    // Variables for DOM elements
    const newsletterForm = document.getElementById('newsletter-form');
    const successMessage = document.getElementById('success-message');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const filterButtons = document.querySelectorAll('.filter-button');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    // Mobile menu toggle
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Newsletter form submission
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;

            // Simulate form submission (in a real application, you would send this to a server)
            console.log('Newsletter subscription for:', email);

            // Show success message
            successMessage.textContent = 'Thank you for subscribing!';
            successMessage.style.display = 'block';

            // Reset form
            emailInput.value = '';

            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        });
    }

    // Portfolio filtering
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));

                // Add active class to clicked button
                button.classList.add('active');

                const filter = button.getAttribute('data-filter');

                // Filter portfolio items
                portfolioItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category').includes(filter)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Don't prevent default for links that go to other pages
            if (this.getAttribute('href').startsWith('#') && this.getAttribute('href').length > 1) {
                e.preventDefault();

                const targetId = this.getAttribute('href');

                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // Close mobile menu if open
                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                    }

                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Accounting for fixed header
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Enhanced navigation - highlight active section based on scroll position
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        const navbar = document.querySelector('.navbar');

        // Add shadow to navbar when scrolling down
        if (scrollPosition > 200) {
            navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }

        // Highlight active section
        const sections = document.querySelectorAll('section[id]');

        if (sections.length) {
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    const correspondingNavLink = document.querySelector(`.nav-links a[href="#${section.id}"]`);

                    if (correspondingNavLink) {
                        document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
                        correspondingNavLink.classList.add('active');
                    }
                }
            });
        }
    });

    // Animation for elements - fade-in effect when page loads
    function animateElements() {
        const elements = document.querySelectorAll('.portfolio-item, .advice-card, .timeline-item, .skill-item');

        elements.forEach((element, index) => {
            // Set initial opacity and transform
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';

            // Set transition properties
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

            // Add delay based on index
            const delay = 0.1 + index * 0.1;
            element.style.transitionDelay = `${delay}s`;

            // Trigger animation after a small delay
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 100);
        });
    }

    // Handle portfolio filtering from URL hash if present
    function handleHashChange() {
        const hash = window.location.hash.substring(1);

        if (hash && hash !== '' && filterButtons.length > 0) {
            // Only proceed if we're on a page with filter buttons
            const targetFilter = hash === 'projects' ? 'all' : hash;
            const targetButton = document.querySelector(`.filter-button[data-filter="${targetFilter}"]`);

            if (targetButton) {
                // Trigger click on the button to activate filtering
                targetButton.click();
            }
        }
    }

    // Run animations and setup when page loads
    animateElements();
    handleHashChange(); // Handle initial hash if present
});

// Listen for hash changes
window.addEventListener('hashchange', handleHashChange);
