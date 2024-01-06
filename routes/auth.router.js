const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const { config } = require('../config/config');
const UserService = require('../services/user.service');

const router = express.Router();

const service = new UserService();


router.post('/login',
    passport.authenticate('local',{session:false}),
    async (req, res, next) => {
        try {
            const user = req.user;
            const payload = {
                sub: user._id,
                role:user.role
            }

           

            const token = jwt.sign(payload,config.jwtSecret)
          
            res.status(201).json({
                user,
                token
            });
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
);

router.post('/change-password',
   
    async (req, res, next) => {
        try {
            const {userId, newPassword} = req.body;

           

            const result = await service.changePassword(userId, newPassword)

       
          
            res.status(201).json(result);
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
);





module.exports = router;

