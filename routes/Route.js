const express = require('express');

const {newBill,getBills}=require("../controllers/BillingController")
const {daily,weekly,monthly,category}=require("../controllers/CalcConroller");
const {createData,updateData,deleteData,getData,getCategory,getDataById,addCategory}=require("../controllers/InventoryController");

const router = express.Router();


router.post("/bill/create",newBill)
router.get("/bill/get",getBills);

router.get("/profit/daily",daily);
router.get("/profit/weekly",weekly);
router.get("/profit/monthly",monthly);
router.get("/profit/category",category);

router.get("/inventory/data",getData);
router.get("/inventory/category",getCategory);
router.post("/inventory/addcategory",addCategory);
router.post("/inventory/add",createData);
router.get("/inventory/find/:id",getDataById);
router.put("/inventory/update/:id",updateData);
router.delete("/inventory/delete/:id",deleteData);

module.exports=router;