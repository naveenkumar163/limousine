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
});
