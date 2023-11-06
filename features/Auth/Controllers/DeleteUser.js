const userModel = require ('../Schemas/user')

const deleteUser =async(req, res, next) => {
    const id = req.params.id;
    const deletedUser =await userModel.deleteOne({_id :id});
    if (deleteUser){
        res.status(200).send( `Deleted User With id: ${id}`);
    }
   else {
    res.status(404).send(`Use Was Not Found With Id: ${id}` );
   }

};
module.exports = deleteUser;