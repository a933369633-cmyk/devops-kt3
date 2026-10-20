const request = require('supertest');
const app = require('../src/app');

describe('КТ3 App routes', () => {
    test('GET/ should return "КТ3 App"',  async () => {
      const response = await request(app).get ('/');
     
      expect(response.status).to.Be(200);
      expect(response.test).to.Be('КТ3 App')
    });
    test('GET /health should return status ok', async () => {
        const response = await request(app).get ('/health');

        expect(response.status).to.Be(200);
      expect(response.body).toEqual({status: Ok});
    });

    });
