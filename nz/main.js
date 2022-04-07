/* Mehrzeilige Kommentare */
// Einzeiliger Kommentar
let lat = -43.531111;
let lng = 172.636667;
let zoom = 9;

let map = L.map('map').setView([lat, lng], zoom);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([lat, long]).addTo(map)
    .bindPopup('<h3>Christchurch</h3>')
    .openPopup();