document.addEventListener("DOMContentLoaded", function() {
    const serviceItems = document.querySelectorAll('.service-item');
    const modal = document.getElementById('imageModal');
    const imageContainer = document.getElementById('imageContainer');
    const closeBtn = document.querySelector('.close');

    serviceItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const imageDirectory = item.dataset.imageDirectory; // Get the image directory from data attribute
            const imageCount = item.dataset.imageCount; // Get the image count from data attribute

            // Clear existing images
            imageContainer.innerHTML = '';

            // Fetch images from the specified directory
            fetchImages(imageDirectory, imageCount);

            // Show the modal
            modal.style.display = 'block';

            // For touch devices, show the hover message
            const hoverMessage = item.querySelector('.hover-message');
            if (hoverMessage) {
                hoverMessage.style.opacity = '1';
                setTimeout(() => {
                    hoverMessage.style.opacity = '0';
                }, 2000); // Hide message after 2 seconds
            }
        });
    });

    // Close the modal when the close button is clicked
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close the modal when clicking outside the modal
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Function to fetch images from the specified directory and display them
    function fetchImages(imageDirectory, imageCount) {
        for (let i = 1; i <= imageCount; i++) {
            const imageUrl = `${imageDirectory}img${i}.png`;
            const image = document.createElement('img');
            image.src = imageUrl;
            imageContainer.appendChild(image);

            // Add click event listener to open the image in a new tab
            image.addEventListener('click', function() {
                window.open(imageUrl, '_blank');
            });
        }
    }
});
