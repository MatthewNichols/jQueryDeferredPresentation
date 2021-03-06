﻿$(function() {

    //create a new deferred
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

    //Only resolve or reject will have any effect and only once.  Whichever happens first wins.

    //Resolve it.  This will call any handlers attached with done.
    deferred.resolve('first value', 'second value');

    //Reject it. This will call any handlers attached with fail method
    deferred.reject('very sad', 'I failed');

    //Delayed call of Resolve. 
    setTimeout(function() {
        deferred.resolve('resolved in the future', '');
    }, 3000);
    
    //Attach another handler to done. 
    deferred.done(function (p1, p2) {
        writeMessage("second Done hander -- p1: " + p1 + " p2: " + p2);
    });
    writeMessage('Attached a second done handler.');
});

function writeMessage(message) {
    /// <summary>Write a message to the screen</summary>
    /// <param name="message" type="String">Message to display</param>

    var now = (new Date()).toTimeString().substring(0, 8);
    $('#messages').append('<p>' + now + ' ' + message + '</p>');
}