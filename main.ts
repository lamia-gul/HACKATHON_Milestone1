// main.ts

// Function to toggle the visibility of all fieldsets
function toggleFieldsetsVisibility(): void {
    // Select all fieldset elements
    const fieldsets: NodeListOf<HTMLFieldSetElement> = document.querySelectorAll('fieldset');

    // Iterate over each fieldset and toggle its visibility
    fieldsets.forEach((fieldset) => {
        if (fieldset.style.display === 'none') {
            fieldset.style.display = 'block';
        } else {
            fieldset.style.display = 'none';
        }
    });
}

// Event listener for the toggle button
const toggleButton = document.getElementById('toggleSectionsBtn');
if (toggleButton) {
    toggleButton.addEventListener('click', toggleFieldsetsVisibility);
}

