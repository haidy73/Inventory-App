const products = require('../models/product.model.js');

//update

let updateProduct = async (req, res) => {
    try {
        let id = req.params.id
        let product = await products.updateOne({ _id: id }, { $set: { ...req.body } })
        if (product.matchedCount === 0) return res.json({ error: 'product not found' })
        res.json('product updated successfully')
    } catch (error) {
        res.json({ error: error.message })

    }
}
//delete

let deleteProduct = async (req, res) => {
    try {
        let id = req.params.id
        let product = await products.deleteOne({ _id: id })
        if (product.deletedCount === 0) { return res.json({ error: 'Product not found' }); }

        res.json({ message: 'Product deleted successfully' });

    } catch (error) {
        res.json({ error: error.message })

    }
}
let searchName = async (req, res) => {
    try {
        let name = req.params.name
        let product = await products.findOne({ name: name })
        if (!product) { return res.json({ error: 'Product not found' }); }
        res.json(product);
    } catch (error) {
        res.json({ error: error.message })
    }


}

/******Create & Read/Get ******/

async function createProduct(req, res) {
    try {
        const { name, price, quantity, category, photo } = req.body;
        const product = await products.create({ name, price, quantity, category, photo });
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
async function getProducts(req, res) {
    try {
        const allProducts = await products.find();
        res.status(200).json(allProducts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    updateProduct,
    deleteProduct,
    searchName,
    createProduct,
    getProducts,
}
