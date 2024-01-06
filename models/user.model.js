const { Schema, model }  = require("mongoose");

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
   
    password: {
        type: String,
        // required: [true, 'La contraseña es obligatoria'],
    },

    fmcTokens: [
        {
          deviceId: {
            type: String,
            index: true,
          },
          token: {
            type: String,
          },
        },
    ],
   
  });
  
  const UserModel = model("User", UserSchema);
  
  module.exports = { UserModel }
  