jQuery.get('/path/to/file', { param1: 'value1' }, function(data, textStatus, xhr) {
    //optional stuff to do after success
});
$.ajax({
        url: 'path/to/file',
        type: 'default GET (other values: POST)',
        dataType: 'default: Intelligent Guess (Other values: xml,json,script,or html)',
        data: { param1: 'value1' },
    })
    .done(function() {
        console.log("success");
    })
    .fail(function() {
        console.log("eror");
    })
    .always(function() {
        console.log("complete");
    });