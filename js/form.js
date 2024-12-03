document.addEventListener('DOMContentLoaded', function() {
    
    // Get all step triggers and form steps
    const stepTriggers = document.querySelectorAll('.step-trigger');
    const formSteps = document.querySelectorAll('.form-step');
    
    // Function to update step styles
    function updateStepStyles(activeStep) {
        stepTriggers.forEach((trigger, index) => {
            // Remove all existing styles
            trigger.className = 'w-1/3 py-4 px-6 text-center cursor-pointer step-trigger';
            
            if (index + 1 === activeStep) {
                // Active step
                trigger.classList.add('border-b-2', 'border-blue-600', 'font-medium', 'text-blue-600');
            } else {
                // Inactive step
                trigger.classList.add('text-gray-500');
            }
        });
    }

    // Function to show specific step
    function showStep(stepNumber) {
        // Hide all form steps
        formSteps.forEach(step => {
            step.style.display = 'none';
        });
        
        // Show the selected step
        const targetStep = document.getElementById(`step${stepNumber}`);
        if (targetStep) {
            targetStep.style.display = 'block';
        }
        
        // Update step indicator styles
        updateStepStyles(stepNumber);
    }

    // Add click event listeners to step triggers
    stepTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const stepNumber = parseInt(trigger.getAttribute('data-step'));
            showStep(stepNumber);
        });
    });

    // Add click handlers to navigation buttons
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const currentStep = getCurrentStep();
            
            if (button.textContent.includes('Next')) {
                if (currentStep < 3) showStep(currentStep + 1);
            } else if (button.textContent.includes('Previous')) {
                if (currentStep > 1) showStep(currentStep - 1);
            }
        });
    });

    // Function to get current visible step
    function getCurrentStep() {
        for (let i = 1; i <= 3; i++) {
            const step = document.getElementById(`step${i}`);
            if (step && step.style.display !== 'none') {
                return i;
            }
        }
        return 1;
    }

    // Initialize first step
    showStep(1);
});
