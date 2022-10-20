const express = require("express")
const router = express.Router();

router.use("/orders", require("./components/orders/routes"));

export = router;
