const express = require('express');
app = express();

var response;

app.get('/', function (req, res) {

<<<<<<< Updated upstream
    response = 'This is version 1 of the app.' + '\n';
=======
    response = 'This is version 3 of the app.' + '\n';
>>>>>>> Stashed changes

    //send the response to the client
    res.send(response);

});

app.listen(8080, function () {
  console.log('Server listening on port 8080...');
});
