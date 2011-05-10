var twitterCollector = require('./twitter.js');

twitterCollector.getEventEmitter().on('new-data', function(newDataEvent) {
    console.log('new-data:', newDataEvent);
});

var usernames = ['smurthasmith','jasoncavnar','jeremie','lockerproject','singlyinc','tikkers','sixwing','temas','thegudernatch',
                 'marshallk','victoriapat','Venrock','pakman','unhosted','jennydeluxe','HackerNewsYC','timc','glindahl'];

function fireNext() {
    if(usernames.length == 0)
        return;
    
    twitterCollector.getNewData({username:usernames.shift(), 'engaged': new Date().getTime()});
    setTimeout(fireNext, Math.random()*1000);
}

fireNext();