const { db } = require("../../Tools/admin")
exports.editProduct = async (req, res, data) => {
    console.log(data)
    const productsRef = db.collection('products').doc(data.id);
    try{
            const udpateData = await productsRef.update({
                id: data.id,
                name: data.name,
                description: data.description,
                quantity: data.quantity,
            });

            return res.status(201).json({general: "Element edited succesfully"});
    } catch (error) {
        return res
        .status(500)
        .json({ general: "Non existing document."});          
    }
};