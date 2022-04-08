const { db } = require("../../Tools/admin")

exports.deleteProducts = async (req, res, id) => {
    
    const productsRef = db.collection('products');
    try{
            let docToDelete = productsRef.where('id','==',id);
            docToDelete.get().then((qSnap) =>{
                qSnap.forEach((doc) =>{
                doc.ref.delete();
              });
            });
    } catch (error) {
        return res
        .status(500)
        .json({ general: "Non existing document."});          
    }
};