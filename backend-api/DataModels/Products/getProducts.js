const { db } = require("../../Tools/admin")

exports.getProducts = async (req, res) => {
    console.log("entrando")
    const productsRef = db.collection('products');
    try{
            productsRef.get().then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data(),}));
            console.log(data);
            return res.status(201).json(data);
            })
    } catch (error) {
        return res
        .status(500)
        .json({ general: "Something went wrong, please try again"});          
    }
};