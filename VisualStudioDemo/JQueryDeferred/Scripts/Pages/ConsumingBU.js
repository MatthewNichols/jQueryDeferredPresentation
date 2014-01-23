$(function() {

    //Will hold the promise returned by AJAX call.
    var requestPromise;

    $('#makeRequest').click(function () {
        writeMessage('--------------------------------------------------');
        
        //Make an ajax request...this is a demo so we know it will take 10 seconds to respond
        writeMessage('starting request');
        requestPromise = $.ajax({
            url: '/home/DelayService',
            type: 'POST'
        });

        writeMessage('done making the request.  Waiting for something to happen...');
        

        //Attach an event handler to the promise
        writeMessage('attach an event handler to the promise. Will run when the promise is resolved');
        requestPromise.done(function (data) {
            writeMessage('server says: ' + data.status);
        });

    });

    $('#attachToRequest').click(function() {

        //Attach another handler when the button is clicked.  But this will only work if the request has been made already.  
        writeMessage('attach a different event handler to the promise.');
        requestPromise.done(function (data) {
            writeMessage('secret code is: ' + data.secretCode);
        });

    });
});

function writeMessage(message) {
    /// <summary>Write a message to the screen</summary>
    /// <param name="message" type="String">Message to display</param>

    var now = (new Date()).toTimeString().substring(0, 8);
    $('#messages').append('<p>' + now + ' ' + message + '</p>');
}