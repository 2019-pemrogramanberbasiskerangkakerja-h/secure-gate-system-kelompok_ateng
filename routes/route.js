var express = require('express')
var router = express.Router();
var middlewares = require('../middlewares/auth.js')
var controller = require('../controller/controller.js')

//user

router.route('/users')
  .get(controller.getAllUser)
  .post(controller.postUser);

router.route('/users/:user_id')
  .get(controller.findUser)
  .delete(controller.deleteUser);

//gate

router.route('/gate')
  .get(controller.getAllGate)
  .post(controller.postGate);

router.route('/gate/:gate_id')
  .get(controller.findGate)
  .delete(controller.deleteGate);

//group

router.route('/group')
  .get(controller.getAllGroup)
  .post(controller.postGroup);

router.route('/group/:group_id')
  .get(controller.findGroup)
  .delete(controller.deleteGroup);

//Jadwal

router.route('/jadwal')
  .get(controller.getAllJadwal)
  .post(controller.postJadwal);

router.route('/jadwal/:jadwal_id')
  .get(controller.findJadwal)
  .delete(controller.deleteJadwal);

router.route('/login')
  .post(controller.login);

module.exports=router;