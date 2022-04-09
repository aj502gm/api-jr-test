const { db } = require("../../Tools/admin")
exports.editProduct = async (req, res, data) => {
    console.log(data)
    const productsRef = db.collection('products');
    try{
            // let docToDelete = productsRef.where('code','==',data.);
            // docToDelete.get().then((qSnap) =>{
            //     qSnap.forEach((doc) =>{
            //     doc.ref.delete();
            //   });
            // });
            return res.status(201).json({general: "Element edited succesfully"});
    } catch (error) {
        return res
        .status(500)
        .json({ general: "Non existing document."});          
    }
};