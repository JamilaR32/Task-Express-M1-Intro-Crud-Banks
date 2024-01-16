const express = require("express");
const {
  addNewAccount,
  getAllAccounts,
  updateAccountById,
  deleteAccountById,
} = require("./controllers");
const router = express.Router();

router.get("/", getAllAccounts);
router.post("/", addNewAccount);

router.delete("/:id", deleteAccountById);

router.put("/:id", updateAccountById);

// const jamila = "";

// module.exports = { router, jamila };
module.exports = router;
