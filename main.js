let latitude = 22.7868542, longitude = 88.3643296;

// Initializing Mapbox
mapboxgl.accessToken = "pk.eyJ1IjoicG9vamEtMTEiLCJhIjoiY2xrc3BwcmptMDFyNzNubnBxbGxqcjAzMyJ9.hXgOsamHpjJJVXAFAw_fsQ"

//Add Mapbox Geocoder
var map = new mapboxgl.Map({
    map.addControl(
        new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        })
    )
})




var img1 = document.querySelector("#amber")

// Create a Amber Palace, Jaipur Marker and add it to the map.
var marker1 = new mapboxgl.Marker({
    element: img1
})
.setLngLat([75.85133, 26.98547])
.addTo(map)
// Create a  Gateway of India, Mumbai Marker and add it to the map.
var marker2 = new mapboxgl.Marker({
    element: img2
})
.setLngLat([18.9220, 72.8347])
.addTo(map)
// Create a India Gate Marker and add it to the map.
var marker3 = new mapboxgl.Marker({
    element: img3
})
.setLngLat([28.61, 77.23])
.addTo(map)

// Create a Lotus Temple, Delhi Marker and add it to the map.
var marker4 = new mapboxgl.Marker({
    element: img4
})
.setLngLat([28.553558, 77.259132])
.addTo(map)

//Create a Victoria Memorial, Kolkata Marker and add it to the map.
var marker5 = new mapboxgl.Marker({
    element: img5
})
.setLngLat([22.5448, 88.3426])
.addTo(map)