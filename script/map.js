document.addEventListener('DOMContentLoaded', function() {

    var mapBlanch;

    ymaps.ready(function(){
    mapBlanch = new ymaps.Map("map", {
    controls: ['geolocationControl', 'zoomControl'],
        center: [55.758468, 37.601088],
        zoom: 15,
        behaviors: ['drag'],
        },
        {
        suppressMapOpenBlock: true,
        geolocationControlSize: "large",
        geolocationControlPosition:
        {
            top: "330px",
            right: "20px"
        },
        geolocationControlFloat: 'none',
        zoomControlSize: "small",
        zoomControlFloat: "none",
        zoomControlPosition:
        {
            top: "260px",
            right: "20px" }
        }
        );


    var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map/map.png',
        iconImageSize: [20, 20],
        iconImageOffset: [-10, -42]
    });
    mapBlanch.geoObjects.add(myPlacemark);
    });

})

