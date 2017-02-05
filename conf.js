exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'chrome'
    },
    params: {
        home: {
            url: "https://www.atrapalo.com/vuelos/",
            origin: "BCN",
            destination: "MAD",
            passengers: "1 pasajero"
        }
    },
    specs: ['tests/test_flightHome.js']
}
