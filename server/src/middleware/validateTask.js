module.exports.validateTask = async(req, res, next) =>{
        const {status, priority} = req.body;

        const validStatus = ['pending', 'in-progress', 'completed'];
        const validPriority = ['low', 'medium', 'high'];

         // Validate status only if sent
         if(status && !validStatus.includes(status)){
            return res.status(400).json({
                message:`Invalid status. Allowed: ${validStatus.join(',')} `
            })
         };

         // Validate priority only if sent
         if(priority && !validPriority.includes(priority)){
            return res.status(400).json({
                message:`Invalid priority. Allowed: ${validPriority.join(',')} `
            })
         };
        next();
}