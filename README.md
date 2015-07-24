# Webhooks
Webhooks is a simple server used to test json webhooks. Clone and run npm install. Then run `node server.js` to get it up running. By default it will listen on port 5050, pass the `--port=[my port]` flag to customize.

* Navigating to the root in your browser will display the log of webhooks.
* POSTing to root will add the payload to the webhooks file.
* Hitting `http://localhost:5050/reset` will empty the file used to store payloads (webhooks.json)
