document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenuContainer = document.getElementById('mobile-menu-container');
    
    menuToggle.addEventListener('click', function() {
        mobileMenuContainer.style.height = 
            mobileMenuContainer.style.height === '0px' || !mobileMenuContainer.style.height ? 
            `${mobileMenuContainer.scrollHeight}px` : '0px';
    });

    // Mobile dropdown toggles
    const mobileDropdownTriggers = document.querySelectorAll('.mobile-dropdown-trigger');
    
    mobileDropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const dropdownMenu = this.nextElementSibling;
            const isActive = dropdownMenu.classList.contains('active');
            
            // Close all other dropdowns
            document.querySelectorAll('.mobile-dropdown-menu').forEach(menu => {
                menu.classList.remove('active');
            });
            
            // Toggle current dropdown
            if (!isActive) {
                dropdownMenu.classList.add('active');
            }
            
            // Update mobile menu container height
            mobileMenuContainer.style.height = `${mobileMenuContainer.scrollHeight}px`;
        });
    });

    const track = document.querySelector('.testimonials-track');
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentIndex = 0;
    let interval;

    // Function to move to a specific slide
    function goToSlide(index) {
        if (index < 0) {
            index = slides.length - 1;
        } else if (index >= slides.length) {
            index = 0;
        }
        
        track.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
        
        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    // Auto-advance slides
    function startAutoSlide() {
        interval = setInterval(() => {
            goToSlide(currentIndex + 1);
        }, 5000); // Change slide every 5 seconds
    }

    function resetAutoSlide() {
        clearInterval(interval);
        startAutoSlide();
    }

    // Event Listeners
    prevBtn.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
        resetAutoSlide();
    });

    nextBtn.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
        resetAutoSlide();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
            resetAutoSlide();
        });
    });

    // Start the automatic slideshow
    startAutoSlide();

    function toggleFAQ(button) {
        // Get the FAQ content element that follows the button
        const faqContent = button.nextElementSibling;
        
        // Toggle the visibility of the FAQ content
        faqContent.classList.toggle('hidden');
        faqContent.classList.toggle('show');
        
        // Add rotation animation to the icon
        const icon = button.querySelector('i.fa-chevron-down');
        if (icon) {
            icon.classList.toggle('rotate-180');
        }
    }

    // Add event listener when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        // Add chevron icons to all FAQ buttons
        const faqButtons = document.querySelectorAll('.faq-content').previousElementSibling;
        faqButtons.forEach(button => {
            const buttonContent = button.querySelector('.flex.items-center.gap-4');
            if (buttonContent) {
                const chevron = document.createElement('i');
                chevron.className = 'fas fa-chevron-down transition-transform duration-300';
                button.appendChild(chevron);
            }
        });
    });
});
