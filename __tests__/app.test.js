const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { cats } = require('../lib/cats-data');

describe('cats routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/cats should return a list of cats', async () => {
    const res = await request(app).get('/cats');
    const expected = cats.map((cat) => {
      return { id: cat.id, name: cat.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/cats/:id should return cat detail', async () => {
    const res = await request(app).get('/cats/1');
    const felix = {
      id: '1',
      name: 'Felix',
      type: 'Tuxedo',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Felix_the_cat.svg/200px-Felix_the_cat.svg.png',
      year: 1892,
      lives: 3,
      isSidekick: false,
    };
    expect(res.body).toEqual(felix);
  });

  afterAll(() => {
    pool.end();
  });
});
