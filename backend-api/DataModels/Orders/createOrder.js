const { db } = require("../../Tools/admin")
exports.createOrder = async (req, res, data) => {
    try{
        const ordersRef = db.collection('order');
        const newDoc = ordersRef.doc(data.id);

        await newDoc.set(data);
        return res.status(201).json({general: "Element created succesfully"});
    } catch (error) {
        return res
        .status(500)
        .json({ general: "Error while creating doc."});          
    }
};