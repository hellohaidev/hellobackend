const {google} = require('googleapis');

const calendar = google.calendar({version: 'v3', auth});

let events = {
    'summary' : 'test event',
    'location' : 'jakrta',
    'description' : 'test event meetup',
    'start' : {
        'date' : '2019-01-04'
    },
    'end' : {
        'date' : '2019-01-05'
    },
    'attendees': [
        {'email': 'adirahman.id@gmail.com'},
        {'email': 'netkom2013@gmail.com'},
      ],

}
calendar.events.insert({
    auth: auth,
    calendarId: 'primary',
    resource: event,
  }, function(err, event) {
    if (err) {
      console.log('There was an error contacting the Calendar service: ' + err);
      return;
    }
    console.log('Event created: %s', event.htmlLink);
  });