/* Mehrzeilige Kommentare */
// Einzeiliger Kommentar

var map = L.map('map').setView([-43.531111, 172.636667], 9);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-43.531111, 172.636667]).addTo(map)
    .bindPopup('<h3>Christchurch</h3>')
    .openPopup();