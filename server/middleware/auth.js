import jwt from 'jsonwebtoken';

const auth = async (req, res, next )=>{
    try{
        const token = req.headers.authorization.split(' ')[1]; 
        
        if(token.length<2)
        res.send.status(400);
        
        
        const isCustomAuth= token.length<500; 
        let decodedData;
        if(token && isCustomAuth){
            decodedData= jwt.verify(token , 'test');
            
            req.userId= decodedData?.id; 
            console.log(req.userId);

        }else{
            decodedData= jwt.decode(token);
            req.userId= decodedData?.sub; 

        }
        next();
    } catch(error){
        console.log(error)
    }
}

export default auth;