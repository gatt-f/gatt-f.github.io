/* Mehrzeilige Kommentare */
// Einzeiliger Kommentar

// durch Variablen ersetzen
let lat = -43.531111;
let lng = 172.636667;
let zoom = 9;

// durch Arrays ersetzen
let coords = [-43.531111, 172.636667];
//console.log(coords);
//console.log(coords[0]);
//console.log(coords[1]);
//console.log(coords.length);
//console.log(ETAPPEN); // gibt Objekte in {} aus
//console.log(ETAPPEN[0]); // Objekte innerhalb eines Arrays ansprechen
//console.log(ETAPPEN[0].nr);
//console.log(ETAPPEN[0].github);
//console.log(ETAPPEN[0].titel);
//console.log(ETAPPEN[0].wikipedia);
//console.log(ETAPPEN[0].lat);
//console.log(ETAPPEN[0].lng);

//console.log(""); // Unterschied
//console.log('');
//console.log('id="map"'); // Grund für verschiedene Anführungszeichen
//console.log(`latitude = ${lat}`); // Backticks durch Shift + Taste neben Clear erhalten // Durch $ kann man Variablen auflösen

let popup = `
<h3>${ETAPPEN[0].titel} (Etappe ${ETAPPEN[0].nr}</h3>
<ul>
    <li>geogr. Länge: ${ETAPPEN[0].lng}</li>
    <li>geogr. Breite ${ETAPPEN[0].lat}</li>
    <li><a href="${ETAPPEN[0].wikipedia}">Link zur Wikipediaseite</a> </li>
    <li><a href="${ETAPPEN[0].github}">Link zur Etappenseite</a></li>
</ul>`;

let map = L.map('map').setView(coords, zoom);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([lat, lng]).addTo(map)
    .bindPopup(popup)
    .openPopup();

//Etappen einbinden
for (let etappe of ETAPPEN) {
    let popup = `
<h3>${etappe.titel} (Etappe ${etappe.nr})</h3>
<ul>
    <li>geogr. Länge: ${etappe.lng}</li>
    <li>geogr. Breite ${etappe.lat}</li>
    <li><a href="${etappe.wikipedia}">Link zur Wikipediaseite</a> </li>
    <li><a href="https://${etappe.github}.github.io/nz/">Link zur Etappenseite</a></li>
</ul>`;
    //Huts einbinden
    L.marker([etappe.lat, etappe.lng]).addTo(map).bindPopup(popup);

    // Etappennavigation erweitern
    let link = `<a href="https://${etappe.github}.github.io/nz/">${etappe.nr}</a>`;
    document.querySelector("#navigation").innerHTML += link;
}
//console.log(etappe);

// Huts-Marker einfügen
for (let hut of HUTS) {
    let popup = `
    <h3>${hut.name}</h3>
    <h4>${hut.region}</h4>
    <hr>
    <p>${hut.info}</p>
    <img src = "${hut.image}" alt = "Vorschaubild Hütte">
    <hr>
    <a href = "${hut.link}" target = "Neuseeland">Link zur Hütte</a>
    `;
    L.circleMarker([hut.lat, hut.lng]).addTo(map).bindPopup(popup);
}