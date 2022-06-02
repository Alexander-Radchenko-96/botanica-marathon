ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [59.938635, 30.323118],
    controls: ['zoomControl'],
    zoom: 17,
    controls: ['geolocationControl', 'zoomControl']
  }, {
    suppressMapOpenBlock: true,
    geolocationControlSize: "large",
    geolocationControlPosition: { top: "350px", right: "10px" },
    geolocationControlFloat: 'none',
    zoomControlSize: "small",
    zoomControlFloat: "none",
    zoomControlPosition: { top: "270px", right: "10px" }
  });

  myMap.controls.remove('searchControl'); // удаляем поиск
  myMap.controls.remove('trafficControl'); // удаляем контроль трафика
  myMap.controls.remove('typeSelector'); // удаляем тип
  myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  myMap.controls.remove('rulerControl'); // удаляем контрол правил
  myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты
}

const slider = document.querySelector('.bouquets-slider');

let mySwiper = new Swiper(slider, {
  slidesPerView: 1,
  direction: 'horizontal',
  spaceBetween: 50,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.bouquets__swiper-next',
    prevEl: '.bouquets__swiper-prev',
  },
})
