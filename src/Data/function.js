import users from './user';

export default async (id) => {
  try {
    const newUser = users.filter(data => data.id === id);
    if (newUser.length > 0) {
      console.log(`fetched user/${newUser[0].id}`);
      return newUser[0];
    }
    throw new Error('Not Found');
  } catch (err) {
    throw new Error(err);
  }
};
