module.exports = [
    // logger
    (req,res,next)=>{
        console.log(`User visit:${req.method} ${req.originalUrl}`);
        next();
    }
]