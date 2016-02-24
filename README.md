# Webhooks
Webhooks is a simple server used to test json webhooks. 

## Usage
```bash
$ npm install
$ echo '[]' > webhooks.json
$ node server.js
```

## Options
`--port` to set the listening port

* Navigating to the root in your browser will display the log of webhooks.
* POSTing to root will add the payload to the webhooks file.
* Hitting `http://localhost:5050/reset` will empty the file used to store payloads (webhooks.json)
