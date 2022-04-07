/* Mehrzeilige Kommentare */
// Einzeiliger Kommentar

// durch Variablen ersetzen
let lat = -43.531111;
let lng = 172.636667;
let zoom = 9;

// durch Arrays ersetzen
let coords = [-43.531111, 172.636667];
console.log(coords);
console.log(coords[0]);
console.log(coords[1]);
console.log(coords.length);

let map = L.map('map').setView(coords, zoom);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([lat, lng]).addTo(map)
    .bindPopup('<h3>Christchurch</h3>')
    .openPopup();