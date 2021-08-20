const fs = require('fs');
const fetch = require("node-fetch");
const EVENT_URL = "http://localhost:1337/events";

fs.readFile('events.json', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    }else {
        const events = JSON.parse(data);

        events.forEach(event=> {
           
            let _data = {
                event_id: event.eventID,
                event_link: event.eventLink,
                event_name: event.eventName,
                event_date: event.eventDate,
                venue_id: event.cc_venueID
            }
            
            fetch(EVENT_URL,{
                method: 'POST', 
                body: JSON.stringify(_data),
                headers: {"Content-type": "application/json; charset=UTF-8"} 
            })
           // .then(json => console.log(json))
            .catch(err => console.log(err));
        });
    }
});
