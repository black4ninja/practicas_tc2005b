const db = require('../utils/database.js');
const bcrypt = require('bcryptjs');

exports.login = function (correo, contrasena) {
    return {
        nombre: "Samuel",
        id: 1,
        activo: true
    };
}

exports.User = class {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(my_username, my_name, my_password) {
        this.username = my_username;
        this.name = my_name;
        this.password = my_password;
    }
    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    async save() {
        try {
            const connection = await db();
            const hashedPass = await bcrypt.hash(this.password, 12)
            const usuario = await connection.execute(
                `INSERT INTO usuario (username, nombre, password) VALUES (?, ?, ?)`,
                [this.username, this.name, hashedPass]
            );

            const result = await connection.execute(
                'INSERT INTO asigna (username, idrol) VALUES (?, 1)',
                [this.username]
            );

            await connection.release();
            return result;
        } catch (error) {
            throw error; // Re-throw the error for proper handling
        }
    }
    //Este método servirá para buscar un usuario por username
    static async findUser(username) {
        try {
            const connection = await db();
            const result = await connection.execute('Select * from usuario WHERE username = ?', [username]);
            await connection.release();
            return result;
        } catch (error) {
            throw error; // Re-throw the error for proper handling
        }
    }

    //Este método servirá para obtener los permisos de un usuario
    static async getPermisos(username) {
        try {
            const connection = await db();
            const result = await connection.execute('Select permiso FROM privilegio pr, posee po, rol r, asigna a, usuario u WHERE u.username = ? AND u.username = a.username AND a.idrol = r.id AND r.id = po.idrol AND po.idpermiso = pr.id', [username]);
            await connection.release();
            return result;
        } catch (error) {
            throw error; // Re-throw the error for proper handling
        }
    }
}
