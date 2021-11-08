1: Please cd into Vehicle-Tracking folder and run "npm i" to install all dependencies.

2: xampp/wampp should be running locally

3: In order to run the application enter following command.
   npm run start
4: In order to run test case enter following command
   npm run test
5: database 'vehicletracking' will be created automatically if does not exist.
6: Add password for in config/env.js file for xampp/wampp whatever you are using.

7: In unit testing: chai package has been used and 11 unit tests have been written so far:
   1: 4 use cases to register whiles
   2: 1 to fetch all registered vehicles
   3: 2 to fetch vehicle's position between to dates
   4: 4 use cases to update 4 vehicle's locations

8: DB design is in the db-design folder along with postman collection json for all api's in root directory
   so simply import postman collection json into your postman client.

Note: total 4 API's have been implemented with following endpoints: 

BaseURL = https://localhost:3000

1: Register vehicle:  
     BaseURL/api/vehicle/register

2: get all registered vehicles: 
     BaseURL/api/vehicle/get

3: Update vehicle: 
     BaseURL/api/vehicle/update-position

4: Get vehicle's location between to dates: 
     BaseURL/api/vehicle/vehicle-position/:vehicleId/:startDate/:endDate



