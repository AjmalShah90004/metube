//  const asyncHandler = (fn)=> async (req, res, next, err)=>{
//     try{
//         await fn(req, res, next, err)
//     }catch(error){
//         res.status(error.code || 500).json({
//             success:false,
//             message:error.message
//         })
//     }
//  }

 const asyncHandler = (requestHandler)=>{
    (req, res, next, err)=>{
        Promise.resolve(requestHandler(req, res, next, err)).catch((err)=>next(err))
    }
 }