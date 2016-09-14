import app from '../server';
import request from 'supertest';
import assert from 'assert';

let agent = request.agent(app);

describe('Item API Tests', function(){
    describe('Getting all items', function(){
        const url = '/api/v1/items';
						
        it('should return 200 when user get all items', function(next){
			agent.get('/')
				.expect(200)
				.end(function(error, response){
					if(error)
						return next(error);
					assert(response.body.length === 1);
					next();
				});
		});

    });
})