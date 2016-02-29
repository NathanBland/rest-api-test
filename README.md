# rest-api-test
A simple express application for testing the payloads of POST and GET requests 

## Installation
`git clone https://github.com/NathanBland/rest-api-test.git`
`npm install`

## Usage
Start with
`node server.js`

Then query it
`curl -H "Content-Type: application/json" -X POST -d '{"student": "hello", "data" : {"sample" : "test"}}' localhost:8080`

If you have `jq` installed, and you should (its awesome), you can make your output prettier.
`curl -H "Content-Type: application/json" -X POST -d '{"student": "hello", "data" : {"sample" : "test"}}' localhost:8080 | jq .`

Have fun.