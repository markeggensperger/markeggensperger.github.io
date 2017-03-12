// var interestPointLatLng = L.latLng(40.764535, -73.999522);
var interestPointLatLng = L.latLng(40.777539, -73.977099);
var allowableRadiusMeters = 150

var mymap = L.map('mapid');

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'scotteggs.o7614jl2',
    accessToken: 'pk.eyJ1Ijoic2NvdHRlZ2dzIiwiYSI6ImNqMDJxY2Z4bjA3cGsycWxzN2xxODI5YnIifQ.RIHnvvc_z7Ia_4hxv8NBBg'
}).addTo(mymap);


mymap.locate({setView: true, maxZoom: 16});


function onLocationFound(e) {
    console.log(e)
    var distance = e.latlng.distanceTo(interestPointLatLng)
    if (distance <= allowableRadiusMeters) {
        console.log('yayayo')
    } else {
        console.log('haha mark, such a fool you are')
    }

    console.log(distance)
}

mymap.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

mymap.on('locationerror', onLocationError);

