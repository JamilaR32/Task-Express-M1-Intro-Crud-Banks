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
const router = express.Router();
router.get("/:id", findById);
router.get("/", getAllAccounts);
router.post("/", createAccount);

router.delete("/:id", delById);

router.put("/:id", updateAccountById);

// const jamila = "";

// module.exports = { router, jamila };
module.exports = router;
