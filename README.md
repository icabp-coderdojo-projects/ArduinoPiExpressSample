# Team ArduinoPi Express Server

This Node.js application, utilising the Express framework, will launch a web server (listening on port 4000 by default). Once called by a client (e.g. a Web Browser), it will execute a Python script, and return the output of that script to the client.

## Getting Started

Follow these instructions to run the example codebase locally on your computer.

### Prerequisites

You need the following installed on your computer:

```
Node.js (https://nodejs.org/en/download/)
```

### Installing

Clone this repo:

```
git clone https://github.com/ibm-cork-coderdojo-projects/ArduinoPiExpressSample.git
cd  ArduinoPiExpressSample
```

Alternatively, if Git is not installed, a Zip file can be downloaded from GitHub, and extracted on the  computer (https://github.com/ibm-cork-coderdojo-projects/ArduinoPiExpressSample/archive/master.zip)

Next, the Node.js module dependencies must be installed using `npm`, the Node Package Manager. There is one important dependency: the Express framework!

```
npm install
```

This will download and install the dependencies into a new `node_modules` folder in your project directory.

Finally, launch the application server with:

```
npm start
```

This launches `app.js`. To view the application in action, open your web browser, and navigate to `http://localhost:4000`.

## What Happened

`app.js` starts up a web server on port 4000, initialised with the Express framework. The code listens for incoming HTTP `GET` requests to the root of the application `/`, i.e. no other path. The incoming HTTP requests are represented by the `req` object.

When a request is received (all HTTP requests sent from your web browser from the address bar are `GET` requests), `spawn` will launch a *child process* on the server, to start `python`, and execute `my_script.py`, located in the `code` folder.

The output of the script is stored in the variable `pyProg`. This is eventually returned to the calling client in the HTTP response object, `res`.

Note: Python scripts in the `code` folder need to have executable permissions to run! e.g. `chmod +x code/my_script.py`
