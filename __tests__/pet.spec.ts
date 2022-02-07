import request from 'supertest';
import { app } from '../src/main';

describe('GET /pet', () => {});

describe('CRUD pet', () => {
  const pet = {
    name: 'bugger',
    foto: 'bugger.jpg',
    porte: 'medio',
    sobre: 'lindo',
    idade: 1,
    foiAdotado: false,
    institution: 'idinstitution',
  };

  let pet_id = '';

  let user = { username: 'admin', password: 'test' };
  let token = '';

  it('login first', async () => {
    let res = await request(app).post('/auth/login').send(user);
    token = res.body.token;
  });

  it('create pet', async () => {
    const res = await request(app)
      .post('/pet')
      //.set('Accept', 'application/json')
      .set('auth', token)
      .send(pet);

    expect(res.status).toBe(201);
    //expect(res.body).toMatchObject(pet);

    pet_id = res.body._id;
  });

  it('get the pet', (done) => {
    request(app)
      .get(`/pet/${pet_id}`)
      //.set('Accept', 'application/json')
      .set('auth', token)
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
  // it('update pet', async () => {
  //   const res = await request(app)
  //     .put(`/pet/${pet_id}`)
  //     .send({ ...pet, name: 'bugguer da silva' })
  //     .set('auth', token)
  //     .set('Accept', 'application/json');
  //   console.log(res.body);

  //   expect(res.status).toBe(200);
  // });
  it('delete pet', async () => {
    const res = await request(app)
      .delete(`/pet/${pet_id}`)
      //.set('Accept', 'application/json')
      .set('auth', token);
    expect(res.status).toBe(200);
  });
});
