const { db } = require("../../Tools/admin")
exports.editOrder = async (req, res, data) => {
    console.log("ID A UPDATEAR: ", data.orderID)
    const orderRef = db.collection('orders').doc(data.orderID);
    try{
            const udpateData = await orderRef.update({
                orderID: data.orderID,
                clientId: data.clientId,
                clientName: data.name,
                productID: data.productID,
            });

            return res.status(201).json({general: "Element edited succesfully"});
    } catch (error) {
        return res
        .status(500)
        .json({ general: "Non existing document."});          
    }
};