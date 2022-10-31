let parkLocation = document.getElementById(parkLocation)
let parkType = document.getElementById(parkType)
let stateDropDown = document.getElementById(stateDropDown)

function loadParklist() {
    for (const location of locationsArray) {
        let option = new Option(location, location);
        locationInfo.appendChild(option)
    }};

    