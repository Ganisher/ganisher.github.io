// Initialize Firebase - https://firebase.google.com/docs/web/setup
  var config = {
    apiKey: "YOUR FIREBASE PROJECT API KEY",
    authDomain: "YOUR FIREBASE PROJECT AUTH DOMAIN",
    databaseURL: "YOUR FIREBASE PROJECT DATABASE URL",
    projectId: "YOUR FIREBASE PORJECT ID",
    storageBucket: "YOUR FIREBASE STORAGE BUCKET URL",
    messagingSenderId: "YOUR FIREBASE PROJECT SENDER ID"
  };
  firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.requestPermission()
    .then(function() {
        return messaging.getToken();
    })
    .then(function(token) {
        // send rest call to add to database
        $.ajax('https://example.firebaseio.com/pushtokens/'+token+'.json', {
            method: 'PUT',
            data: 'true',
            error: function(err) {
            }
        });
    })
    .catch(function(err) {
        console.log('Permission denied');
    });
