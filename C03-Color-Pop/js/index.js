//Remove comment to use JS, styling based on instructions from https://developers.google.com/maps/documentation/javascript/styling

/*function initMap() {
  var city = {lat: 51.509865, lng: -0.118092};
  var map = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 10,
        disableDefaultUI: true,
        //map styling
        styles: [
            {elementType: 'geometry', stylers: [{color: '#333333'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#222222'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#eeeeee'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#eeeeee'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#cccccc'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#3a3a3a'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#777777'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#212121'}]
            },
            {
              featureType: 'road',
              elementType: 'labels',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#555555'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#222222'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#bbbbbb'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#777777'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#222222'}]
            }
          ],
        center: city}
  );
  //marker settings
  var marker = new google.maps.Marker({
    position: city, 
    map: map,
    icon: {
        url: "INSERT YOUR ICON HERE",
        scaledSize: new google.maps.Size(60, 60)
    }
  });
}*/