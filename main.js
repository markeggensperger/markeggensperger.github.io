var mymap = L.map('mapid').setView([40.777557, -73.977018], 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'scotteggs.o7614jl2',
    accessToken: 'pk.eyJ1Ijoic2NvdHRlZ2dzIiwiYSI6ImNqMDJxY2Z4bjA3cGsycWxzN2xxODI5YnIifQ.RIHnvvc_z7Ia_4hxv8NBBg'
}).addTo(mymap);


var circle = L.circle([40.777557, -73.977018], {
    color: 'blue',
    fillColor: '#99ccff',
    fillOpacity: 0.5,
    radius: 100
}).addTo(mymap);

mymap.locate({setView: true, maxZoom: 16});
