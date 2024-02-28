const mongoose = require("mongoose");
const validator = require("validator")
const bcrypt = require("bcrypt")
Schema = mongoose.Schema

const userSchema = new Schema({
    email :{
        type:String,
        required:true,
        unique:true
    },
    password :{
        type:String,
        required:true,
    }
})

//static method

userSchema.statics.signup = async function (email , password){
    if(!email || !password){
        throw Error("Fill all required fields");
    }
    const exists = await this.findOne({email})
    if(exists){
        throw Error("Email already exists...");
    }
    if(!validator.isEmail(email)){
        throw Error("Email not valid");
    }
    if(!validator.isStrongPassword(password)){
        throw Error("Weak Password");
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)

    const user = await this.create({email,password:hash})

    return user;
}

// static login method
userSchema.statics.login = async function(email,password){
    if(!email || !password){
        throw Error("Fill all required fields");
    }
    const user = await this.findOne({email})
    if(!user){
        throw Error("No User already exists...");
    }
    const match = await bcrypt.compare(password,user.password);
    if(!match){
        throw Error("Incorrect Password");
    }

    return user;

}

const User = mongoose.model('User',userSchema);

module.exports = User;