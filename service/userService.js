const userRepo = require('../repository/userRepository');

function registerUser({ username, password, favorecidos = [] }) {
  if (userRepo.findUser(username)) {
    throw new Error('Usuário já existe');
  }
  const user = { username, password, favorecidos, saldo: 10000 };
  userRepo.addUser(user);
  return user;
}

function loginUser({ username, password }) {
  const user = userRepo.findUser(username);
  if (!user || user.password !== password) throw new Error('Credenciais inválidas');
  return user;
}

function getUsers() {
  return userRepo.getAllUsers();
}

module.exports = { registerUser, loginUser, getUsers };
