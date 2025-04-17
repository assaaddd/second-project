export const userGet = (req , res , next) => {
    try{
        res.json({
            message: "worls"
        })
    }catch(err){
        throw new Error("Error in userGet" + err);
    }
}