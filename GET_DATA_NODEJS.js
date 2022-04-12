const request = require('request');
const { MongoClient, ServerApiVersion } = require('mongodb');

// Set request options
var options = {
  'method': 'GET',
  'url': 'https://www.vattenfall.se/api/price/spot/pricearea/2022-04-01/2022-04-11/SN3'
};

// Do our request
request(options, function (error, response) {
  // check for error
  if (error) throw new Error(error);

  // Setup our MongoDB client
  const uri = "mongodb+srv://<username>:<password>@mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  
  // Parse our returned data
  var ourData = JSON.parse(response.body)

  // Loop over our data and create ISODate() from timestamp
  ourData.map((entry)=>{
    entry.TimeStamp = new Date(entry.TimeStamp + "Z")
  })

  // Connect to MongoDB
  client.connect(err => {
    // Setup our collection object
    const collection = client.db("energy_price").collection("SN3");
    // Insert all of our data
    collection.insertMany(ourData).then((result) =>{
      console.log(result)
      client.close();
    })
    
  });
});



