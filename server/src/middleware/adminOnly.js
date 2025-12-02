exports.adminOnly = (req, res, next) =>{
    if(req.user.role != "admin"){
        return res.status(303).json({messsage: "Only admin can perform this action"});
    };
    next();
}