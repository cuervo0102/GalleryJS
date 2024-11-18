document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery img');
    const largeImage = document.getElementById('largeImage');
    const largeText = document.getElementById('largeText');
  
    images.forEach((image, index) => {
      image.setAttribute('tabindex', '0');
      console.log(`Tabindex added to image ${index + 1}`);
    });

    images.forEach((image) => {
      image.addEventListener('mouseover', () => {
        updateLargeImage(image);
      });
  
      image.addEventListener('mouseleave', () => {
        resetLargeImage();
      });
  
      image.addEventListener('focus', () => {
        updateLargeImage(image);
      });
  
      image.addEventListener('blur', () => {
        resetLargeImage();
      });
    });
  
    function updateLargeImage(image) {
      largeImage.style.backgroundImage = `url(${image.src})`;
      largeText.textContent = image.alt;
      console.log('Large image updated:', image.alt);
    }
  
    function resetLargeImage() {
      largeImage.style.backgroundImage = 'none';
      largeText.textContent = 'Hover or focus on an image to see details';
      console.log('Large image reset to default');
    }
  
    console.log('Page loaded successfully!');
  });
  