const { MongoClient } = require('mongodb');

// MongoDB connection URI
const uri = 'mongodb+srv://gnaneswar:gnaneswar@cluster0.uo98nn5.mongodb.net/'; // Update with your MongoDB connection URI

// Document to be inserted
const document = {
  name: 'Product A',
  price: 19.99,
  description: 'This is a great product',
  image_url: 'C:/Desktop/ecommerce_mswd/src/images/shirt.jpg'
};


async function insertDocument() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    // Connect to MongoDB
    await client.connect();
    console.log('Connected to MongoDB');

    // Select the database and collection
    const database = client.db('test');
    const collection = database.collection('products');

    // Insert the document into the collection
    const result = await collection.insertOne(document);
    console.log(`${result.insertedCount} document inserted with _id: ${result.insertedId}`);
  } catch (error) {
    console.error('Error inserting document:', error);
  } finally {
    // Close the MongoDB connection
    await client.close();
    console.log('MongoDB connection closed');
  }
}

// Call the insertDocument function to insert the document
insertDocument();
