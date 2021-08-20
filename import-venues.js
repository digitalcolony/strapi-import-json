const fs = require('fs');
const fetch = require("node-fetch");
const VENUE_URL = "http://localhost:1337/venues";

fs.readFile('venues.json', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    }else {
        const venues = JSON.parse(data);

        venues.forEach(venue=> {
           
            let _data = {
                venue_name: venue.venueName,
                venue_type: venue.venueType,
                venue_status: venue.venueStatus,
                address1: venue.address_1,
                address2: venue.address_2,
                city: venue.city,
                state: venue.state,
                country: venue.country,
                zipcode: venue.zip,
                latitude: venue.lat,
                longitude: venue.lon,
                venue_id: venue.cc_venueID
            }
            
            fetch(VENUE_URL,{
                method: 'POST', 
                body: JSON.stringify(_data),
                headers: {"Content-type": "application/json; charset=UTF-8"} 
            })
           // .then(json => console.log(json))
            .catch(err => console.log(err));
        });
    }
});
