const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const { UserModel } = require('../models/user.model');




class UserService {
  constructor() {}

  async create(data) {
    // const exist = await this.findByFicha(data.ficha);
    // if (exist) {
     
    //   throw boom.conflict("Ficha ya registrada");
    // }
    // const hash = await bcrypt.hash(data.password, 10);
    // const newUser = new UserModel({ ...data, password: hash });
    // try {
    //   const dbRes = await newUser.save();
    //   delete dbRes._doc.password;
    //   return dbRes;
    // }catch (error) {
    //   throw boom.conflict(error );
    // }
   
  }


  





  
  
}

module.exports = UserService;
