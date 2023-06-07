const { json } = require('express');
const express = require('express'); 
const app = express();     

//Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// Home page request
app.get('/', (req, res) => { 
  res.send("Welcome to the microservice - enabled with dashboard");
}); 

//app.listen(3000, () => { 
//  console.log('Server is listening on port 3000'); 
//}); 

app.listen(PORT, HOST, () => { 
  console.log('Running on http://${HOST}:${PORT}');
  console.log('New image for dashboard');
}); 