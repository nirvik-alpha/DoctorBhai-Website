
import User from "../models/UserSchema.js"

export const updateUser = async(req,res)=>{

    const id = req.params.id

    try{
        const updatedUser = await User.findByIdAndUpdate(id,{$set:req.body}, {new:true})

        res.status(200).json({success:true , message:'Succesfully updated' , data:updatedUser})

    }catch(err)
    {
        res.status(200).json({success:true , message:'Failed to update'})
    }

}

export const deleteUser = async(req,res)=>{

    const id = req.params.id

    try{
        
        await User.findByIdAndDelete(id)

        res.status(200).json({success:true , message:'Succesfully deleted'})

    }catch(err)
    {
        res.status(500).json({success:true , message:'Failed to delete'})
    }

}

export const getSingleUser = async(req,res)=>{

    const id = req.params.id

    try{
        const user = await User.findById(id).select("-password")

        res.status(200).json({success:true , message:'User found' , data:user})

    }catch(err)
    {
        res.status(404).json({success:true , message:'No user found'})
    }

}


export const getAllUser = async(req,res)=>{

    try{
        const users = await User.find({}).select("-password")  // exclude sensitive data we dont want to show it to the client

        res.status(200).json({success:true , message:'User found' , data:users})

    }catch(err)
    {
        res.status(404).json({success:true , message:'Not found'})
    }

}