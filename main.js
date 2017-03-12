// var interestPointLatLng = L.latLng(40.764535, -73.999522);
var interestPointLatLng = L.latLng(40.777539, -73.977099);
var allowableRadiusMeters = 150

var mymap = L.map('mapid');


mymap.locate({setView: true, maxZoom: 16});


function onLocationFound(e) {
    console.log(e)
    var distance = e.latlng.distanceTo(interestPointLatLng)
    if (distance <= allowableRadiusMeters) {
        console.log('yayayo')
        setImageVisible('clue8a', false)
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

function setImageVisible(id, visible) {
    var img = document.getElementById(id);
    img.style.visibility = (visible ? 'visible' : 'hidden');
}
