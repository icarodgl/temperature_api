import request from 'supertest';
import { app } from '../src/main';

// describe('GET /institution', () => { });

describe('CRUD institution', () => {
  const institution = {
    name: 'bug orfanato',
    foto: 'logo.jpg',
    email: 'adote@gmail.com',
    telefone: '27 9999999',
    sobre: 'Bug orfanato é um teste da api',
    credito: 0,
    valido: true,
    termo: 'não doe para nós.',
    pets: [],
    uf: 'ES',
    cidade: 'vix',
  };
  let user = { username: 'admin', password: 'test' };
  let token = '';

  it('login first', async () => {
    let res = await request(app).post('/auth/login').send(user);
    token = res.body.token;
  });

  let institution_id = '';

  it('create institution', async () => {
    const res = await request(app)
      .post('/institution')
      .set('Accept', 'application/json')
      .set('auth', token)
      .send(institution);
    expect(res.status).toBe(201);
    //expect(res.body).toMatchObject(institution);

    institution_id = res.body._id;
  });

  it('get the institution', (done) => {
    request(app)
      .get(`/institution/${institution_id}`)
      .set('Accept', 'application/json')
      .set('auth', token)
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
  it('update institution', async () => {
    const res = await request(app)
      .put(`/institution/${institution_id}`)
      .set('auth', token)
      .send({ ...institution, credito: 100 });

    expect(res.status).toBe(200);
    //expect(res.body.credito).toBe(100);
  });
  it('delete institution', async () => {
    const res = await request(app)
      .delete(`/institution/${institution_id}`)
      .set('auth', token)
      .set('Accept', 'application/json');
    expect(res.status).toBe(200);
  });
});
