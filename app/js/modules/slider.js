import Swiper from 'swiper';
const slider = () => {
    new Swiper('.skills__swiper', {
        spaceBetween: 17,
        grabCursor: true,
        slidesPerView: 4,
        navigation: {
            nextEl: '.skills__button-next',
            prevEl: '.skills__button-prev',
          },
      });
}
export default slider