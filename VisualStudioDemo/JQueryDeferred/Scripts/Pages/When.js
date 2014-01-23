$(function() {

    //Create a couple of Deferreds that we will resolve with button clicks
    var deferred1 = $.Deferred();
    var deferred2 = $.Deferred();

    //Make an ajax request that will return in 10 seconds.
    var deferred3 = $.ajax({
        url: '/home/DelayService',
        type: 'POST'
    });

    //Attach a handler to the ajax call so we can see when it comes back
    deferred3.done(function (data, statusText, jqXhr) {
        writeMessage("Ajax Call returned");
    });

    //Create a new Deferred that will wait for all 3
    var grouped = $.when(deferred1, deferred2, deferred3);

    //Display when ALL of them complete successfully
    grouped.done(function(d1, d2, d3) {
        writeMessage("deferred1 returned " + d1);
        writeMessage("deferred2 returned " + d2);

        //deferred3 is an ajax request so it returns [data, statusText, jqXhr].
        //pull out the data we care about
        var d3Data = d3[0];
        var d3StatusText = d3[1];
        writeMessage("deferred3 returned " + d3Data.secretCode + "  + statusText: " + d3StatusText);
    });

    //Watch to see if there is a failure in any of the 3 deferreds
    grouped.fail(function () {
        writeMessage("the group failed");
    });

    //Wire up the buttons so we can delay as long as we want
    $('#resolve1').on('click', function() {
        deferred1.resolve("Value 1");
    });

    $('#resolve2').on('click', function () {
        deferred2.resolve("Value 2");
    });

    //Wire up rejections too
    $('#reject1').on('click', function () {
        deferred1.reject();
    });

    $('#reject2').on('click', function () {
        deferred2.reject();
    });


});

function writeMessage(message) {
    /// <summary>Write a message to the screen</summary>
    /// <param name="message" type="String">Message to display</param>

    var now = (new Date()).toTimeString().substring(0, 8);
    $('#messages').append('<p>' + now + ' ' + message + '</p>');
}