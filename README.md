# breezo
A simple weather web application using the Visual Crossing API.
This application uses a proxy server for API Key handling and security.

# General info
- This is a simple weather web application using the Visual Crossing API.
- Users can search for a location and the relevant weather data will appear, fetched from the API.
- This is also presented in graph form.
- We also present a 24 hour forecast, as well as a 7 day overview of the location.

# Development Steps:
- Ensure Node is installed:
run ```npm init -y```

- Run the server locally (optional development step):
run ```npm start```
Head over to http:\\localhost:3000

- Install Node dependencies 
run ```npm install express axios dotenv cors```
- Express = web framework
- Axios = makes HTTP Requests
- dotenv = manages environment and secure variables
- cors = allowing request from frontend