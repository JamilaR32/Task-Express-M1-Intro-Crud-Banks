const accounts = require("../accounts");
const Account = require("../models/Account");

const getAllAccounts = async (req, res) => {
  try {
    const accounts = await Account.find();
    return res.status(200).json(accounts);
  } catch (error) {
    return res.status(500).json("bad Server");
  }
};

// const addNewAccount = (req, res) => {
//   accounts.push({
//     id: accounts[accounts.length - 1].id + 1,
//     username: req.body.username,
//     funds: 0,
//   });
//   const newAccount = accounts[accounts.length - 1];
//   console.log(newAccount);
//   return res.status(200).json(newAccount);
// };

const createAccount = async (req, res) => {
  try {
    const account = req.body;

    await Account.create(account);

    console.log(account);
    return res.status(201).json(account);
  } catch (error) {
    return res.status(500).json("bad Server", error);
  }
};
// const deleteAccountById = (req, res) => {
//   const accoutId = req.params.id;
//   const account = accounts.find((account) => account.id == accoutId);
//   if (!account) {
//     res.status(404).json("This account is not exist");
//   } else {
//     res.status(200).json(accounts.filter((x) => x.id != accoutId));
//   }
// };

// const updateAccountById = (req, res) => {
//   const accoutId = req.params.id;
//   const account = accounts.find((account) => account.id == accoutId);
//   if (!account) {
//     res.status(404).json("Not found");
//   } else {
//     (account.username = req.body.username),
//       (account.funds = req.body.funds),
//       res.status(200).json(account);
//   }
// };
// const updateAccountById = (req, res) => {
//   const accoutId = req.params.id;
//   const account = accounts.find((account) => account.id == accoutId);
//   if (!account) {
//     res.status(404).json("Not found");
//   } else {
//     (account.username = req.body.username),
//       (account.funds = req.body.funds),
//       res.status(200).json(account);
//   }
// };
const updateAccountById = async (req, res) => {
  try {
    const id = req.params.id;
    await Account.findByIdAndUpdate(id, req.body);
    res.status(204).end();
  } catch (error) {
    return res.status(500).json("bad Server", error);
  }
};

const delById = async (req, res) => {
  try {
    const id = req.params.id;
    await Account.findByIdAndDelete(id, req.body);
    res.status(200).json("Deleted");
  } catch (error) {
    return res.status(500).json("bad Server", error);
  }
};

const findById = async (req, res) => {
  try {
    const id = req.params.id;
    const accountGetted = await Account.findById(id);
    return res.status(200).json(accountGetted);
  } catch (error) {
    return res.status(500).json("bad Server", error);
  }
};
module.exports = {
  createAccount,
  // addNewAccount,
  getAllAccounts,
  // deleteAccountById,
  updateAccountById,
  delById,
  findById,
};
