import { db } from './firebase';

export const doCreateUser = (id, email) =>
  db.ref(`users/${id}`).set({
    id,
    email,
  });

export const onceGetUsers = () => db.ref('users').once('value');
