export default function handler(req,res){
    const {method}=req;
    if(method==="POST"){
        const {email,eventId}=req.body;
        res.status(200).json({message:`you has been registered successfully with the email:${email} ${eventId}`});
    }
}