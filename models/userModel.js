'use strict';
const users = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@metropolia.fi',
    password: '1234',
  },
  {
    id: '2',
    name: 'Jane Doez',
    email: 'jane@metropolia.fi',
    password: 'qwer',
  },
];

const getUserLogin = async (params) => {
  try {
    console.log(params);
    const user = users.filter((user) => user.email === req.params.email);
    return user;
  } catch (e) {
    console.log('error', e.message);
  }
};

module.exports = {
  users,
};
