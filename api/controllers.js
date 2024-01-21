const accounts = require("../accounts");
const Account = require("../models/Account");

//we use middleware function to make our functions shorter by fetching it with id
const getAllAccounts = async (req, res, next) => {
  try {
    const accounts = await Account.find();
    return res.status(200).json(accounts);
  } catch (error) {
    // return res.status(500).json("bad Server");
    next(error);
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

const createAccount = async (req, res, next) => {
  try {
    const account = req.body;

    await Account.create(account);

    console.log(account);
    return res.status(201).json(account);
  } catch (error) {
    // return res.status(500).json("bad Server", error);
    next(error);
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

//update using shorter functions
const updateAccountById = async (req, res, next) => {
  try {
    await req.account.updateOne(req.body);
    res.status(204).end();
  } catch (error) {
    // return res.status(500).json("bad Server", error);
    next(error);
  }
};

// const delById = async (req, res, next) => {
//   try {
//     const id = req.params.id;
//     await Account.findByIdAndDelete(id, req.body);
//     res.status(200).json("Deleted");
//   } catch (error) {
//     // return res.status(500).json("bad Server", error);
//     next(error);
//   }
// };

//dellete using shorter functions
const delById = async (req, res, next) => {
  try {
    await req.account.deleteOne(req.body);
    res.status(200).json("Deleted");
  } catch (error) {
    // return res.status(500).json("bad Server", error);
    next(error);
  }
};

// const findById = async (req, res, next) => {
//   try {
//     const id = req.params.id;
//     const accountGetted = await Account.findById(id);
//     return res.status(200).json(accountGetted);
//   } catch (error) {
//     next(error);
//     // return res.status(500).json("bad Server", error);
//   }
// };

//find by id shorter function
const findById = async (req, res, next) => {
  try {
    const accountGetted = await req.account;
    return res.status(200).json(accountGetted);
  } catch (error) {
    next(error);
    // return res.status(500).json("bad Server", error);
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
