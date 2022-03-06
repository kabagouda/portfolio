function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 6.23788, lng: 1.16024};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Lomé, TOGO' // Title Location
    });
}