const products = require('../models/product.model.js');

//update

let updateProduct = async (req,res)=>{
    try{
    let id = req.params.id
    let product = await products.updateOne({_id:id},{$set:{...req.body}})
     if (product.matchedCount === 0) return res.json({error:'product not found'})
        res.json('product updated successfully')
    }catch (error){
    res.json({error:error.massege})

    }
}
//delete

let deleteProduct = async (req,res)=>{
    try {
         let id = req.params.id
        let product = await products.deleteOne({_id:id})
           if (product.deletedCount === 0) { return res.json({ error: 'Product not found' }); }

         res.json({ message: 'Product deleted successfully' });
        
    } catch (error) {
        res.json({error:error.massege})
        
    }
}
let searchName = async (req,res)=>{
    try{
     let name = req.params.name
     let product = await products.findOne({name:name})
      if (!product) {return res.json({ error: 'Product not found' });}
      res.json(product);
     }catch (error){
       res.json({error:error.message})
    } 


}

module.exports = {
     updateProduct,
     deleteProduct,
     searchName
}
