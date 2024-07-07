const {app, server} = require('../app');
const request = require('supertest');

describe('GET /', () => {
    afterAll(() => {
        server.close();
    });
    // test risky score
    it('responds with json', async () => {
        const response = await request(app).get('/').query({
            engagement_score: 90,
            cutOff_score: 100
        });

        expect(response.body.result).toBe("Risky");
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toEqual('application/json; charset=utf-8');
    });

    // test not risky score
    it('responds with json', async () => {
        const response = await request(app).get('/').query({
            engagement_score: 100,
            cutOff_score: 90
        });

        expect(response.body.result).toBe("Not Risky");
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toEqual('application/json; charset=utf-8');
    });

    // test invalid input
    it('responds with json', async () => {
        const response = await request(app).get('/').query({
            engagement_score: "a",
            cutOff_score: 60
        });

        expect(response.body.result).toBe("Error: Invalid Input. Please enter a number.");
        expect(response.status).toBe(400);
        expect(response.headers['content-type']).toEqual('application/json; charset=utf-8');
    });

    // test invalid input. cutOff score not given
    it('responds with json', async () => {
        const response = await request(app).get('/').query({
            engagement_score: 0.9,
        });

        expect(response.body.result).toBe("Error: Invalid Input. Please enter a number.");
        expect(response.status).toBe(400);
        expect(response.headers['content-type']).toEqual('application/json; charset=utf-8');
    });
});