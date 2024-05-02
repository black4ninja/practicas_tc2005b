const model = require("../models/usuarios.model.js");
const bcrypt = require('bcryptjs');

module.exports.render_login = async (req, res) => {
    res.render("usuarios/registro", {
        registro: false
    });
}

module.exports.do_login = async (req, res) => {
    try {
        const usuarios = await model.User.findUser(req.body.username)

        if (usuarios.length < 1) {
            res.render("usuarios/registro", {
                registro: false
            });
            return;
        }

        const usuario = usuarios[0];
        const doMatch = await bcrypt.compare(req.body.password, usuario.password);

        if (!doMatch) {
            res.render("usuarios/registro", {
                registro: false
            });
            return;
        }

        // Se agrega método para obtener el permiso del usuario
        const permiso = await model.User.getPermisos(usuario.username);
        if (permiso.length == 0) {
            req.session.error = "Usuario y/o contraseña incorrectos";
            res.render("usuarios/registro", {
                registro: false
            });
            return;
        }

        /* Cuando tengamos la confirmación del permiso se guarda la sesión y los permisos en nuestro req.session */
        req.session.permisos = permiso;
        req.session.username = usuario.nombre;
        req.session.isLoggedIn = true;

        res.render('usuarios/logged', {
            user: usuario,
            permisos: req.session.permisos || [],
        });
    } catch (error) {
        res.render("usuarios/registro", {
            registro: false
        });
    }
}

module.exports.get_registro = async (req, res) => {
    res.render("usuarios/registro", {
        registro: true
    });
}

module.exports.post_registro = async (req, res) => {
    try {
        const username = req.body.username;
        const name = req.body.name; // Assuming you have a 'name' field in the request body
        const password = req.body.password;

        const user = new model.User(username, name, password);
        const savedUser = await user.save();

        res.status(201).redirect("/usuarios/login");

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error registering user!" }); // Idealmente se crea una plantilla de errores genérica
    }
}

module.exports.get_logged = async (req, res) => {
    try {
        const usuarios = await model.User.findUser(req.session.username)
        if (usuarios.length < 1) {
            res.render("usuarios/registro", {
                registro: false
            });
            return;
        }

        const usuario = usuarios[0];
        res.render('usuarios/logged', {
            user: usuario
        });
    } catch (error) {
        res.render("usuarios/registro", {
            registro: false
        });
    }
}

module.exports.editar_usuario = async (req, res) => {
    res.send("El usuario tiene permisos para entrar a esta vista");
}

module.exports.logout = async (req, res) => {
    req.session.permisos = '';
    req.session.username = '';
    req.session.isLoggedIn = false;
    res.send("El usuario ha cerrado sesión");
}