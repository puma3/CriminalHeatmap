// This example requires the Visualization library. Include the libraries=visualization
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization">

var map, heatmap;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: { lat: 33.754504, lng: -84.396582 },
        mapTypeId: 'roadmap'
    });

    map.data.setStyle({
        fillColor: 'green',
        strokeWeight: 1
    });

    var script = document.createElement('script');
    script.src = './heatmap.js';
    document.getElementsByTagName('head')[0].appendChild(script);

    var gradient = [
        'rgba(0, 255, 255, 0)',
        'rgba(0, 255, 255, 1)',
        'rgba(0, 191, 255, 1)',
        'rgba(0, 127, 255, 1)',
        'rgba(0, 63, 255, 1)',
        'rgba(0, 0, 255, 1)',
        'rgba(0, 0, 223, 1)',
        'rgba(0, 0, 191, 1)',
        'rgba(0, 0, 159, 1)',
        'rgba(0, 0, 127, 1)',
        'rgba(63, 0, 91, 1)',
        'rgba(127, 0, 63, 1)',
        'rgba(191, 0, 31, 1)',
        'rgba(255, 0, 0, 1)'
    ]
    heatmap.set('gradient', gradient);
}

function toggleHeatmap() {
    heatmap.setMap(heatmap.getMap() ? null : map);
}

// function changeGradient() {
//     var gradient = [
//         'rgba(0, 255, 255, 0)',
//         'rgba(0, 255, 255, 1)',
//         'rgba(0, 191, 255, 1)',
//         'rgba(0, 127, 255, 1)',
//         'rgba(0, 63, 255, 1)',
//         'rgba(0, 0, 255, 1)',
//         'rgba(0, 0, 223, 1)',
//         'rgba(0, 0, 191, 1)',
//         'rgba(0, 0, 159, 1)',
//         'rgba(0, 0, 127, 1)',
//         'rgba(63, 0, 91, 1)',
//         'rgba(127, 0, 63, 1)',
//         'rgba(191, 0, 31, 1)',
//         'rgba(255, 0, 0, 1)'
//     ]
//     heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
// }

function changeRadius() {
    heatmap.set('radius', heatmap.get('radius') ? null : 20);
}

function changeOpacity() {
    heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
}

// function getPoints() {
//     // var records = 
//     // console.log(records);
//     return [
//         new google.maps.LatLng(37.782551, -122.445368),
//         new google.maps.LatLng(37.782745, -122.444586),
//         new google.maps.LatLng(37.782842, -122.443688),
//         new google.maps.LatLng(37.782919, -122.442815)];
// }