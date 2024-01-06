const express = require('express');


const validatorHandler = require('./../middlewares/validator.handler');
const UserService = require('../services/user.service');
const { getUserSchema } = require('../schemas/user.schema');



const router = express.Router();
const service = new UserService();



// router.get('/', async (req, res, next) => {
//   try {
   
//     res.json({});
//   } catch (error) {
//     next(error);
//   }
// });

// router.get('/:id',
//   validatorHandler(getUserSchema, 'params'),
//   async (req, res, next) => {
//     try {
//       const { id } = req.params;
//       const category = await service.findOne(id);
//       res.json(category);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

// router.post('/',
//   // passport.authenticate('jwt',{session:false}),
//   // checkRoles([ROLES.ADMIN,ROLES.FUNCIONARIO,ROLES.LIDER]),
//   // validatorHandler(createUserSchema, 'body'),
//   async (req, res, next) => {
//     try {
//       const body = req.body;
//       const user = await service.create(body);
//       res.status(201).json(user);
//     } catch (error) {
//       next(error);
//     }
//   }
// );



// router.delete('/:id',
//   validatorHandler(getUserSchema, 'params'),
//   async (req, res, next) => {
//     try {
//       const { id } = req.params;
//       await service.delete(id);
//       res.status(201).json({id});
//     } catch (error) {
//       next(error);
//     }
//   }
// );



module.exports = router;

