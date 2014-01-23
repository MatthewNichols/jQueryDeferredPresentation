$(function() {

    //Will hold the promise returned by AJAX call.
    var requestPromise;
    var wrappedPromise;

    $('#makeRequest').click(function () {
        writeMessage('--------------------------------------------------');
        writeMessage('starting request');

        //Make an ajax request...this is a demo so we know it will take 10 seconds to respond
        // $.ajax returns a jQuery Promise.
        requestPromise = $.ajax({
            url: '/home/DelayService',
            type: 'POST'
        });

        writeMessage('done making the request.  Waiting for return value to happen...');

        //Attach an event handler to the promise
        writeMessage('attach an event handler to the Promise. Will run when the Promise is resolved');
        requestPromise.done(function (data) {
            writeMessage('Original Promise - secret code is: ' + data.secretCode);
        });

        //Wrap the promise in another promise
        wrappedPromise = requestPromise.then(function(data) {
            data.secretCode = data.secretCode + 'secret';
            return data;
        });
    });

    $('#attachToRequest').click(function() {

        //Attach another handler when the button is clicked.  But this will only work if the request has been made already.  
        writeMessage('attach a different event handler to the wrapped Promise.');
        wrappedPromise.done(function (data) {
            writeMessage('Wrapped Promise - secret code is: ' + data.secretCode);
        });

    });
});

//Function to write messages to the message window
function writeMessage(message) {
    /// <summary>Write a message to the screen</summary>
    /// <param name="message" type="String">Message to display</param>

    var now = (new Date()).toTimeString().substring(0, 8);
    $('#messages').append('<p>' + now + ' ' + message + '</p>');
}