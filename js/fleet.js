function toggleFAQ(button) {
    // Toggle the plus/minus icon
    const icon = button.querySelector('i');
    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus');
    icon.classList.toggle('rotate-45');

    // Toggle the content visibility
    const content = button.nextElementSibling;
    content.classList.toggle('hidden');
    content.classList.toggle('show');
}
document.addEventListener('DOMContentLoaded', function () {
    const categoryButtons = document.querySelectorAll('.fleet-category-btn');
    const fleetCards = document.querySelectorAll('.fleet-card');

    categoryButtons.forEach(button => {
        button.addEventListener('click', function () {
            const category = this.getAttribute('data-category');

            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            this.classList.add('active');

            // Show or hide fleet cards based on the selected category
            fleetCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block'; // Show card
                } else {
                    card.style.display = 'none'; // Hide card
                }
            });
        });
    });
});