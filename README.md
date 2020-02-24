# Eventful
This is a small web application prototype that queries the [Eventful](https://sandiego.eventful.com/events) API.
The docs for the API can be found here: [https://api.eventful.com/](https://api.eventful.com/)

**Features available:**
 - Search for events near the user's current location (the users needs
   to allow it)
   
 - Search for events near a city that happen in a specific
   time period
 - See the details of an event 
 - Participate in an event (*disabled by request*)
 - Delete an event (*disabled by request*)

**How to run the project:**
1. Run the following commands in the folder where you want to place the project:

    git clone https://github.com/EuniceB/eventful-api.git
    cd eventful-api
    npm install
    npm start

2. Open your browser and access [http://localhost:3000](http://localhost:3000)

If you have any doubts, feel free to contact me at eunicebeijinho@gmail.com.

**Technologies and libraries used:**

 - React - a component-based reactive JavaScript library for building user-interfaces
 - GraphQL - query language/server-side runtime used to request data from a server
 - Express - Javascript library for creating a server
 - Node.js - JavaScript runtime built on Chrome's V8 JavaScript engine
 - Eventful API - the API used to retrieve the data for this project. It shows information about events happening all around the world.
 - SASS - CSS extension language that allows the use of variables, mixins, etc.
 - Materialize CSS - UI library

**Possible future improvements:**

 - Pagination of the results
 - Authentication and different kinds of roles
 - Responsive design

**UI Mockups**

The mockups used for this simple UI are located in the "mockups" folder.