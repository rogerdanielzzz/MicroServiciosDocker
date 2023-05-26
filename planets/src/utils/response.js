module.exports=(res,statusCode,data)=>{
    res.status(statusCode).json({
        success:true,
        data,
    })
}