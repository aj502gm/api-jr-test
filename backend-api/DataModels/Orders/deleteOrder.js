const { db } = require("../../Tools/admin")
exports.deleteOrder = async (req, res, id) => {
    console.log(id)
    const ordersRef = db.collection('orders');
    try{
            let docToDelete = ordersRef.where('orderID','==',id);
            docToDelete.get().then((qSnap) =>{
                qSnap.forEach((doc) =>{
                doc.ref.delete();
              });
            });
            return res.status(201).json({general: "Element deleted succesfully"});
    } catch (error) {
        return res
        .status(500)
        .json({ general: "Non existing document."});          
    }
};