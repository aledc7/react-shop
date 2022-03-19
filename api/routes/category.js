const Category = require("../models/Category");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();

// CREATE
router.post("/", verifyTokenAndAdmin, async(req,res)=>{
  const newCategory = new Category(req.body)

  try {
    // this .save method come from mongoDB
    const saveCategory = await newCategory.save();
    res.status(200).json(saveCategory);
  } catch (error) {
    res.status(500).json(error);
  }
});

// UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  

  try {
    const updateCategory = await Category.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, { new: true })

    res.status(200).json(updateCategory);

  } catch (error) {
    res.status(500).json(error);
  }
});


// GET ONE
router.get("/find/:id", async (req, res) => {
  try {
    const category = await category.findById(req.params.id);
    res.status(200).json(category)
  } catch (error) {
    res.status(500).json(error)
  }
});

// GET ALL 
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let categories;

    if(qNew){
      categories = await Category.find().sort({createdAt: -1}).limit(10);
    } else if(qCategory){
      categories = await Category.find({categories:{
        $in:[qCategory]
      }});
    }else{
      categories = await Category.find();
    }
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json(error);
  }
});

// DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id)
    res.status(200).json('Category has been deleted.')
  } catch (error) {
    res.status(500).json(error)
  }
});

module.exports = router