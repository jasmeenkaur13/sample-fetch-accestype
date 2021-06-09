# node-fetch-accessType
A simple API server to return the access type according to the username entered


# Install
Install the required packages by running  `npm install` in the project 
directory, then you are ready to go.

Run the server with `npm start`

Service will be available on http://localhost:3030/login [POST] body{"userName": "1"}

returns {"accessType:"readonly|admin|jira|confluence|payadvice"}
