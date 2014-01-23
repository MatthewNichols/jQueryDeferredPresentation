$(function() {

    //create a new deferred.
    var deferred = $.Deferred();
    writeMessage("created a deferred");
    
    //Attach a handler to done.  You can have any paramerters you want as long as resolve supplies them
    deferred.done(function(p1, p2) {
        writeMessage("Done  --  p1: " + p1 + " p2: " + p2);
    });
    
    //Attach a handler to fail
    deferred.fail(function(p1, p2) {
        writeMessage("Fail  --  p1: " + p1 + " p2: " + p2);
    });
    writeMessage('attached done and fail handlers');

    //Only resolve or reject will have any effect and only once.  Whichever happens first wins.  This is the main point

    $('#callResolve').on('click', function() {
        //Resolve it.  This will call any handlers attached with done.
        deferred.resolve('first value', 'second value');
    });

    $('#callReject').on('click', function() {
        //Reject it. This will call any handlers attached with fail method
        deferred.reject('very sad', 'I failed');
    });

});


//Function to write messages to the message window
function writeMessage(message) {
    var now = (new Date()).toTimeString().substring(0, 8);
    $('#messages').append('<p>' + now + ' ' + message + '</p>');
}