// Get the reference to all the swiper slides
const swiperSlides = document.querySelectorAll('.swiper-slide');

// Function to change the background image of each slide
function changeBackgroundImage() {
  swiperSlides.forEach((slide) => {
    const currentPhoto = slide.querySelector('.imgs').getAttribute('src');
    const imageUrl = `url(${currentPhoto})`;
    slide.querySelector('.background').style.backgroundImage = imageUrl;
  });
}

// Call the function to initially set the background images
changeBackgroundImage();