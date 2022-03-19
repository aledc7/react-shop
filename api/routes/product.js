const Product = require("../models/Product");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();

// CREATE
router.post("/", verifyTokenAndAdmin, async(req,res)=>{
  const newProduct = new Product(req.body)

  try {
    // this .save method come from mongoDB
    const saveProduct = await newProduct.save();
    res.status(200).json(saveProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

// UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  

  try {
    const updateProduct = await Product.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, { new: true })

    res.status(200).json(updateProduct);

  } catch (error) {
    res.status(500).json(error);
  }
});


// GET ONE
router.get("/find/:id", async (req, res) => {
  try {
    const product = await product.findById(req.params.id);
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json(error)
  }
});

// GET ALL
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;

    if(qNew){
      products = await Product.find().sort({createdAt: -1}).limit(10);
    } else if(qCategory){
      products = await Product.find({categories:{
        $in:[qCategory]
      }});
    }else{
      products = await Product.find();
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

// DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id)
    res.status(200).json('Product has been deleted.')
  } catch (error) {
    res.status(500).json(error)
  }
});

module.exports = router