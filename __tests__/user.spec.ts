import request from 'supertest';
import { app } from '../src/main';

// describe('GET /user', () => {});

describe('CRUD user', () => {
  const user = {
    name: 'buguer de Oliveira',
    foto: 'foto.jpg',
    email: 'gugguer@gmail.com',
    telefone: '27 920006060',
    sobre: 'Um adotador de gatos',
    credito: 100,
  };

  const authUser = {
    username: 'tester',
    password: 'test',
    role: 2,
    user: user,
  };

  let user_id = '';
  it('create user error já existe', async () => {
    const res = await request(app)
      .post('/auth/new')
      .set('Accept', 'application/json')
      .send(authUser);
    expect(res.status).toBe(400);
    //expect(res.body).toMatchObject(user);

    user_id = res.body._id;
  });
});
