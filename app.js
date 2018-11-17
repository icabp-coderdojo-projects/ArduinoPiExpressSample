const express = require('express')
const app = express()
const port = 4000
//Tell Express to serve static html files from the 'public' folder.
app.use(express.static('public'))
//Create a variable to store the state of the light (on or off) at any given time,
//assume off (false) to start with
var light_on = false;

//Configure express to listen for HTTP GET requests at "/toggle"
//(i.e. http://localhost:port"/toggle")
app.get("/toggle", (req, res) => {

    //Let the const 'spawn' hold the child_process module.
    const { spawn } = require("child_process");
    var pyProg;

    //Toggle the light to the opposite value of whatever it is right now
    light_on = !light_on;

    //Call the child_process to run the Python script to turn on or off the light
    //appropriately, depending on the current value of light_on - store the output in pyProg.
    if (light_on) {
      pyProg = spawn("python", ["./code/script_turn_on.py"]);
    }
    else {
      pyProg = spawn("python", ["./code/script_turn_off.py"]);
    }

    //When output data (i.e. standard output) has been detected in 'pyProg', run
    //this function to handle that output - the variable 'data' holds the output.
    pyProg.stdout.on("data", function(data) {

        //Write the output data to the console.
        console.log(data.toString());
        //Write the output data into the HTTP response object, 'res'.
        res.write(data)
        //Send the HTTP response back to the client and close the connection.
        res.end();
    });
})

//Start the express website on the port specified.
app.listen(port, () => console.log("Application listening on port " + port + "!"))
