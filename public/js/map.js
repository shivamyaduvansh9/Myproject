
// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com

mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: "mapbox://styles/mapbox/streets-v12",//style url
    center:listing.geometry.coordinates, // starting position [lng, lat][ 77.209006, 28.613895 ]
    zoom: 9 // starting zoom
});

const marker = new mapboxgl.Marker( { color: "red"})
        .setLngLat(listing.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({offset: 25})
        .setHTML(`<h4>${listing.title}</h4><p>Exact Location will be provided after booking</p>`))
        .addTo(map);