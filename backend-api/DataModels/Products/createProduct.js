const { db } = require("../../Tools/admin")
exports.createProduct = async (req, res, data) => {
    try{
        const productsRef = db.collection('products');
        const newDoc = productsRef.doc(data.id);

        await newDoc.set(data);
        return res.status(201).json({general: "Element created succesfully"});
    } catch (error) {
        return res
        .status(500)
        .json({ general: "Error while creating doc."});          
    }
};