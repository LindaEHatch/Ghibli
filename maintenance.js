// This script maintains a MongoDB collection of Studio Ghibli films
// it fetches the latest list of films from the API and updates a local copy.

// Benefits of caching our own copy of the data:
// -Ability to run your own queries & projections with Mongo
// -Save the user from having to download the entire dataset
// -No need to rely on external data file

// Data is sourced from Studio Ghibli:
// https://ghibliapi.herokuapp.com/

// Updates run on a schedule using node-cron
// See also: https://www.npmjs.com/package/node-cron

// To auto-run this in the background, daemonize it (e.g. with pm2)
// See also: https://pm2.keymetrics.io/

// Libraries
const fetch = require('node-fetch');	// Library to fetch JSON data
const cron = require('node-cron');		// Library to schedule tasks
const mongodb = require('mongodb');		// Library to connect to mongodb

// Settings
const ---_data_url = '_________________';
const mongo_url = "mongodb://localhost:27017/";		// mongodb url
const database_name = '_______';	   // name of database
const collection_name = '____________';   // name of collection
const options = {useUnifiedTopology: true}; // mongodb options

// Set up a schedule to fetch new data daily
cron.schedule('* 1 * * *', () => {
	mongodb.MongoClient.connect(mongo_url, options).then( mongo_client => {
		console.log('Downloading and Parsing New Data.');
		fetch(---_data_url)
			.then(response => response.json())
			.then(json => saveData(json, mongo_client) );
	}).catch( e => console.log(e) )
}, null, true);

// remove old data from Mongo and replace with new data.
const saveData = async (astronauts, mongo_client) => {
	console.log('Updating Database.');
	console.log(_____________);
	const collection = mongo_client.db(database_name).collection(collection_name);
	await collection.deleteMany( {} )
	await collection.insertMany( astronauts.people )
	console.log('Update Complete.')
}
