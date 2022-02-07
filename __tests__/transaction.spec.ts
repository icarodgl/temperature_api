import request from 'supertest';
import { app } from '../src/main';

describe('GET /transaction', () => {});

describe('CRUD transaction', () => {
  const transaction = {
    pet_id: '1123123',
    value: 100,
    date: new Date('2020-01-01').toISOString(),
  };

  let transaction_id = '';

  let user = { username: 'admin', password: 'test' };
  let token = '';

  it('login first', async () => {
    let res = await request(app).post('/auth/login').send(user);
    token = res.body.token;
  });

  it('create transaction', async () => {
    const res = await request(app)
      .post('/transaction')
      .set('Accept', 'application/json')
      .set('auth', token)
      .send(transaction);
    console.log(res.body);

    expect(res.status).toBe(201);

    transaction_id = res.body._id;
  });

  it('get the transaction', (done) => {
    request(app)
      .get(`/transaction/${transaction_id}`)
      .set('Accept', 'application/json')
      .set('auth', token)
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
  it('update transaction', async () => {
    const res = await request(app)
      .put(`/transaction/${transaction_id}`)
      .set('auth', token)
      .set('Accept', 'application/json')
      .send({ ...transaction, value: 50 });
    expect(res.status).toBe(200);
  });
  it('delete transaction', async () => {
    const res = await request(app)
      .delete(`/transaction/${transaction_id}`)
      .set('Accept', 'application/json')
      .set('auth', token);
    expect(res.status).toBe(200);
  });
});
