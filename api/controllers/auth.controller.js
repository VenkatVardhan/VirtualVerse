import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken'



export const signup = async (req, res,next) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === '' ||
    email === '' ||
    password === ''
  ) {
    next(errorHandler(400,'All Fileds are required'));
  }
  const hashedPassword= bcryptjs.hashSync(password,10);

  const newUser = new User({
    username,
    email,
    password:hashedPassword,
  })
  try {
    await newUser.save()
    res.json('SignUp succesful');
  } catch (error) {
    next(error);
  }
}
export const signin = async(req,res,next)=>{

  const {email,password}=req.body;
  if(!email|| !password ||email ==='' || password ===''){
    return next(errorHandler(500,'All Fields are Required'))
  }
  try{
    const validUser= await User.findOne({email});
    if(!validUser){
      return next(errorHandler(404,'User not found'));
      
    }
    const valid =bcryptjs.compareSync(password,validUser.password);
    if(!valid){
      return next(errorHandler(400,'Invalid Password '));
      

    }
    const {password:pass,...rest}=validUser._doc;
    const token =  jwt.sign({
      id:validUser._id},process.env.JWT_SECRETKEY);
    res.status(200).cookie('acessToken',token,{
      httpOnly:true}).json(rest);
  

  }
  catch(error){
    next(error);

  }





}
export const google=async (req,res,next)=>{
  const {email,name,googlePhotoURL}=req.body;
  try {
  const user = await User.findOne({email});
  if(user){
    const {password,...rest}=user._doc;
    const token = jwt.sign({id:user._id},process.env.JWT_SECRETKEY);
    res.status(200).cookie('access_token',token,{httpOnly:true}).json(rest);

  }
  else{
    const generatedPassword =
      Math.random().toString(36).slice(-8) +
      Math.random().toString(36).slice(-8);
    const hashedPassword=bcryptjs.hashSync(generatedPassword,10);

    const username=name.toLowerCase().split(' ').join('')+Math.random().toString(9).slice(-4);
    const newUser=new User({
      email,
      username,
      password:hashedPassword,
      profilePicture:googlePhotoURL,

    })
    newUser.save()
    const { password: pass, ...rest } = validUser._doc
    const token = jwt.sign(
      {
        id: validUser._id,
      },
      process.env.JWT_SECRETKEY
    );
    res
      .status(200)
      .cookie('acessToken', token, {
        httpOnly: true,
      })
      .json(rest)
  }
}
  catch (error) {
    next(error)
    
  }


}
