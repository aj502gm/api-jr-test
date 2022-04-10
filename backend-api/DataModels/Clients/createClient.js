const { db } = require("../../Tools/admin")
exports.createClient = async (req, res, data) => {
    try{
        const clientsRef = db.collection('clients');
        const newDoc = clientsRef.doc(data.id);

        await newDoc.set(data);
        return res.status(201).json({general: "Client created succesfully"});
    } catch (error) {
        return res
        .status(500)
        .json({ general: "Error while creating doc."});          
    }
};