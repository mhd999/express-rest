// @flow
import express from 'express';
import bodyParser from 'body-parser';

import {SERVER_PORT, DB_URL} from './config';
import {MongoClient} from 'mongodb';

let app = express();
app.use(bodyParser.json());

const dbUrl = DB_URL;

(async () => {
	try {
		let db = await MongoClient.connect(dbUrl);

		app.get('/', (req, res) => {
			db.collection('items').find({}).toArray((err, items) => {
				if(err) throw err;
				res.status(200).json(items);
			});
		});

		if(!module.parent){ 
			app.listen(SERVER_PORT,  () => console.log(`Listening on port ${SERVER_PORT}`)); 
		}

		
	} catch(e) {
		console.log(e);
	}


})();

export default app;

