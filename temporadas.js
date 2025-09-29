document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');

    if (dropdownButton && dropdownContent) {
        dropdownButton.addEventListener('mouseover', function() {
            dropdownContent.style.display = 'block';
        });

        dropdownButton.addEventListener('mouseout', function() {
            dropdownContent.style.display = 'none';
        });
    }
});