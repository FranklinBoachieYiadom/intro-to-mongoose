exports.getUsers =(req,res)=>{
    res.status(200).send("All users");
}
exports.getUser =(req,res)=>{
    res.status(200).send("Single  user");
}
exports.createUser =(req,res)=>{
    res.status(201).send("Creates a user");
}
exports.updateUser =(req,res)=>{
    res.status(200).send("Updates a user");
}
exports.deleteUser =(req,res)=>{
    res.status(200).send("Deletes a users");
}




