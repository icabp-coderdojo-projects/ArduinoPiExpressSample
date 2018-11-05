const express = require('express')
const app = express()
const port = 4000
//Tell Express to serve static html files from the 'public' folder.
app.use(express.static('public'))


//Configure express to listen for HTTP GET requests at "/"
//(i.e. http://localhost:port"/") <= No need to include the "/" at the end here.
app.get("/", (req, res) => {

    //Let the const 'spawn' hold the child_process module.
    const { spawn } = require("child_process");
    //Call the child_process to run the Python script - store the output in pyProg.
    const pyProg = spawn("python", ["./code/my_script.py"]);

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
