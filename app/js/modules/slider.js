import Swiper from 'swiper';
const slider = () => {
    const skillsGallery = new Swiper('.skills__swiper', {
        spaceBetween: 17,
        grabCursor: true,
        slidesPerView: 4,
        navigation: {
            nextEl: '.skills__button-next',
            prevEl: '.skills__button-prev',
        },
        breakpoints: {
            200: {
                slidesPerView: 1,
            },
            424: {
                slidesPerView: 2,
            },
            856: {
                slidesPerView: 3,
            },
            1133: {
                slidesPerView: 4,
            },
        },
    });
    const instagramGallery = new Swiper('.instagram__swiper', {
        spaceBetween: 17,
        grabCursor: true,
        slidesPerView: 4,
        breakpoints: {
            200: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: 2,
            },
            633: {
                slidesPerView: 3,
            },
            939: {
                slidesPerView: 4,
            },
        },
    });
    const tabsGallery = new Swiper('.tabs__swiper', {
        spaceBetween: 17,
        grabCursor: true,
        slidesPerView: 4,
        autoplay: {
            delay: 2500,
            // disableOnInteraction: true,
          },
        breakpoints: {
            200: {
                slidesPerView: 1,
            },
            324: {
                slidesPerView: 2,
            },
            632: {
                slidesPerView: 3,
            },
            947: {
                slidesPerView: 4,
            },
        },
    });
}
export default slider