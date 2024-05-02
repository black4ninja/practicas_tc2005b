const express = require('express');
const router = express.Router();
const controller = require("../controllers/usuarios.controller.js")
const isAuth = require('../utils/is-auth.js');
const canCreate = require('../utils/can-create.js');
const canView = require('../utils/can-view.js');

router.get('/test_json', (req, res) => {
    res.status(200).json({ code: 200, msg: "Ok" });
});
router.get('/login', controller.render_login);
router.post('/login', controller.do_login);
router.get('/registro', controller.get_registro);
router.post('/registro', controller.post_registro);
router.get('/logged', isAuth, controller.get_logged);
router.get('/obtener_usuarios', isAuth, canView, () => { });
router.post('/obtener_usuarios', () => { });
router.get('/buscar_usuario', () => { });
router.post('/buscar_usuario', () => { });
router.get('/editar_usuario', isAuth, canCreate, controller.editar_usuario);
router.post('/editar_usuario', () => { });
router.post('/eliminar_usuario', () => { });
router.get('/logout', controller.logout);

module.exports = router;