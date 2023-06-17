let users = [];

const getAllUsers = (req, res) => {
  const userList = users.map(user => {
    return {
      id: user.id,
      username: user.username,
      email: user.email
    };
  });

  res.json(userList);
};


const createUser = (req, res) => {
  const { username, email, password } = req.body;
  const newUser = { id: users.length + 1, username, email, password };
  users.push(newUser);

  console.log(`New user created: Username - ${username}, Email - ${email}, Password - ${password}`);

  const response = {
    id: newUser.id,
    username: newUser.username,
    email: newUser.email,
    password: newUser.password
  };

  res.status(201).json(response);
};


const updateUser = (req, res) => {
  const { id } = req.params;
  const { username, email } = req.body;
  const user = users.find((user) => user.id === Number(id));
  if (user) {
    user.username = username || user.username;
    user.email = email || user.email;
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found.' });
  }
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((user) => user.id === Number(id));
  if (index !== -1) {
    users.splice(index, 1);
    res.sendStatus(204);
  } else {
    res.status(404).json({ error: 'User not found.' });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
};
