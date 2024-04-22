module.exports.index = async(req,res) =>{
    res.status(200).send({status:"success",message:"Get all users"})
}