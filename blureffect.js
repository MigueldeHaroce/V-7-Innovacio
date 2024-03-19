const swiperSlides = document.querySelectorAll('.swiper-slide');

function changeBackgroundImage() {
  swiperSlides.forEach((slide) => {
    const currentPhoto = slide.querySelector('.imgs').getAttribute('src');
    const imageUrl = `url(${currentPhoto})`;
    slide.querySelector('.background').style.backgroundImage = imageUrl;
  });
}

changeBackgroundImage();