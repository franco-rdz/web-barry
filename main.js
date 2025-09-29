document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica para la galería de imágenes ---
    const galleryImages = document.querySelectorAll('.gallery-image');
    const fullscreenDiv = document.getElementById('fullscreen');
    const fullscreenImg = document.getElementById('fullscreen-img');
    const closeBtn = document.getElementById('close');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const imageCounter = document.getElementById('image-counter');

    if (galleryImages.length > 0) {
        const imagesArray = Array.from(galleryImages);
        let currentIndex;

        const openFullscreen = (imgElement) => {
            currentIndex = imagesArray.findIndex(img => img.src === imgElement.src);
            updateImageAndCounter();
            fullscreenDiv.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        };

        const closeFullscreen = () => {
            fullscreenDiv.style.display = 'none';
            document.body.style.overflow = 'auto';
        };

        const showPrevImage = () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : imagesArray.length - 1;
            updateImageAndCounter();
        };

        const showNextImage = () => {
            currentIndex = (currentIndex < imagesArray.length - 1) ? currentIndex + 1 : 0;
            updateImageAndCounter();
        };

        const updateImageAndCounter = () => {
            fullscreenImg.src = imagesArray[currentIndex].src;
            imageCounter.textContent = `${currentIndex + 1} / ${imagesArray.length}`;
        };

        galleryImages.forEach(img => {
            img.addEventListener('click', () => openFullscreen(img));
        });

        closeBtn.addEventListener('click', closeFullscreen);
        prevBtn.addEventListener('click', showPrevImage);
        nextBtn.addEventListener('click', showNextImage);

        document.addEventListener('keydown', (e) => {
            if (fullscreenDiv.style.display === 'flex') {
                if (e.key === 'ArrowLeft') showPrevImage();
                if (e.key === 'ArrowRight') showNextImage();
                if (e.key === 'Escape') closeFullscreen();
            }
        });
    }
});
