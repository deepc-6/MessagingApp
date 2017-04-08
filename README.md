# MessagingApp
A single-page messaging application using MEAN (MongoDB, Express.js, AngularJS, Node.js) stack

#### This is a work in progress

### Installation

1) Download or clone this project

2) Install Node.js, npm and MongoDB

3) Setup the project using the command:

   ```npm install```

4) Create a directory inside the project directory for the database and name it ```testDB```

5) Open a console window and navigate to the MongoDB installation directory (e.g, C:\MongoDB\bin\)

6) From the bin folder, start MongoDB by using the following command:

   ```mongod --dbpath C:\MessagingApp\testDB\``` (assuming you downloaded the project to C: drive)
   
   Keep this console window open
   
7) Open a second console window, navigate to the project directory and run the project using:

   ```npm start```
   
8) Open a browser and go to ```localhost:3000```

### TODO:

1) <strike>Setup the base for the application</strike>

2) <strike>Implement login and register features, handle incorrect inputs and redirect to messages page on successful login</strike>

3) <strike>List all users from the database and add send message option</strike>

4) <strike>Get all messages for current user from the database and implement inbox / outbox displays</strike>

5) Store the current user id in local storage or cookies and handle back and refresh buttons for the browser

6) Implement real-time updates of messages

7) Show notifications when a new message is received

8) Implement separate views on expanding each message

9) Improve design and styles for the pages

10) Write unit tests
