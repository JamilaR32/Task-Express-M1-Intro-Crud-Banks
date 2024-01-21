const express = require("express");
const {
  addNewAccount,
  getAllAccounts,
  updateAccountById,
  deleteAccountById,
  createAccount,
  delById,
  findById,
} = require("./controllers");
const Account = require("../models/Account");
const router = express.Router();

router.param("id", async (req, res, next, id) => {
  const account = await Account.findById(id);
  if (!account) {
    return res.status(404).json({ msg: "Account with this id isn't Found" });
  }
  req.account = account;
  next();
});
router.get("/:id", findById);
router.get("/", getAllAccounts);
router.post("/", createAccount);

router.delete("/:id", delById);

router.put("/:id", updateAccountById);

// const jamila = "";

// module.exports = { router, jamila };
module.exports = router;
