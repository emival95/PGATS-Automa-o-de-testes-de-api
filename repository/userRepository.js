// In-memory user database
const users = [];

function addUser(user) {
  users.push(user);
}

function findUser(username) {
  return users.find(u => u.username === username);
}

function getAllUsers() {
  return users;
}

module.exports = { users, addUser, findUser, getAllUsers };
