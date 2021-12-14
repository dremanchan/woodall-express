const express = require('express')

// express in a function

const app = express();



// A shortcut to setup endpoints for
// GET /index.html
// GET /anotherOne.html
// .... and any other files inside of /server/public
app.use(express.static('server/public'));

// Setup a GET /space-jams endpoint
// Endpoint === method + URL
// handle requests for GET /space-jams
// http://localhost:5000/space-jams
app.get('/space-jams', (req, res) => {
    console.log('\bout to get some space jams');
    
    // Send back a response
    res.send(`
        <h1>ready to Space Jam? </h1>

        <button>Jam Time</button>
    `)

});

// listen on port 5000

const port = 5000;
app.listen(port, () =>{
    console.log('in listening');
});










