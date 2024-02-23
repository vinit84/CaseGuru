
const userService=require("../services/user_Service.js")
const getUserProfile=async(req,res)=>{
    try {
        const jwt=req.headers.authorization?.split(" ")[1];

        if(!jwt){
            return res.status(404).send({error:"token not found"})
        }
        const user = await userService.getUserProfileByToken(jwt)

        return res.status(200).send(user);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const getAllUsers=async(req,res)=>{
    try {
        const users=await userService.getAllUsers();
        return res.status(200).send(users)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const deleteUser = async (req, res) => {
    try {
      const { userId } = req.params;
      const deletedUser = await userService.deleteUser(userId);
      return res.status(200).send(deletedUser);
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  };
  
  module.exports = {
    getUserProfile,
    getAllUsers,
    deleteUser,
  };
