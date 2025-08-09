const userRepo = require('../repository/userRepository');
const transferRepo = require('../repository/transferRepository');

function transfer({ from, to, value }) {
  const sender = userRepo.findUser(from);
  const recipient = userRepo.findUser(to);
  if (!sender || !recipient) throw new Error('Usuário não encontrado');
  if (sender.saldo < value) throw new Error('Saldo insuficiente');
  const isFavorecido = sender.favorecidos.includes(to);
  if (!isFavorecido && value >= 5000) throw new Error('Transferência acima de R$ 5.000,00 só para favorecidos');
  sender.saldo -= value;
  recipient.saldo += value;
  const transferObj = { from, to, value, date: new Date() };
  transferRepo.addTransfer(transferObj);
  return transferObj;
}

function getTransfers() {
  return transferRepo.getAllTransfers();
}

module.exports = { transfer, getTransfers };
