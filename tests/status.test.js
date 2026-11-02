const request = require('supertest');
const app = require('../app');

describe('GET /status', () => {
  it('returns ok with uptime and start time', async () => {
    const res = await request(app).get('/status');

    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toMatch(/json/);
    expect(res.body.status).toBe('ok');
    expect(typeof res.body.uptime).toBe('number');
    expect(res.body.uptime).toBeGreaterThanOrEqual(0);

    const startedAt = new Date(res.body.startedAt);
    expect(Number.isNaN(startedAt.getTime())).toBe(false);
    expect(startedAt.getTime()).toBeLessThanOrEqual(Date.now());
  });
});
