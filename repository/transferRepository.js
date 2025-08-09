// In-memory transfer database
const transfers = [];

function addTransfer(transfer) {
  transfers.push(transfer);
}

function getAllTransfers() {
  return transfers;
}

module.exports = { transfers, addTransfer, getAllTransfers };
