const { db } = require("../../Tools/admin")
exports.editClient= async (req, res, data) => {
    console.log(data)
    const clientRef = db.collection('clients').doc(data.id);
    try{
            const udpateData = await clientRef.update({
                id: data.id,
                name: data.name,
                surname: data.surname,
                genre: data.genre,
                email: data.email,
            });

            return res.status(201).json({general: "Element edited succesfully"});
    } catch (error) {
        return res
        .status(500)
        .json({ general: "Non existing document."});          
    }
};