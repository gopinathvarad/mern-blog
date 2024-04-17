import  mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },

    email:{
        type: String,
        required: true,
        unique: true,
    },

    password:{
        type: String,
        required: true,
    },
}, {timestamps: true} // {timestamps: true} -- > useful while creating and updating to note the times !!!!! 
);

const User = mongoose.model('User', userSchema);

export default User;