const connection = require('../database/db');
const bcrypt = require('bcrypt');


exports.login = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    console.log("Email recibido:", email);
    console.log("Password recibido:", password);

    connection.query(
        'SELECT * FROM users WHERE email = ?',
        [email],
        (err, result) => {
            if (err) {
                console.log(err);
                return res.send('Error al autenticar el usuario');
            }

            if (result.length === 0) {
                return res.send('Usuario no encontrado');
            }

            const user = result[0];

            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) {
                    console.log(err);
                    return res.send('Error al comparar la contraseña');
                }

                if (isMatch) {
                    // Guardamos el nombre del usuario en la sesión
                    req.session.user = {
                        id: user.id,
                        name: user.user,
                        email: user.email
                    };

                    res.redirect('/dashboard');
                } else {
                    res.send('Contraseña incorrecta');
                }
            });
        }
    );
};

exports.register = (req, res) => {
    const user = req.body.user;
    const rol = req.body.rol;
    const email = req.body.email;
    const password = req.body.password;

    // Encriptar la contraseña antes de guardarla
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
        if (err) {
            console.log(err);
            res.send('Error al encriptar la contraseña');
        } else {
            connection.query(
                'INSERT INTO users SET ?',
                { user: user, rol: rol, email: email, password: hashedPassword },
                (err, result) => {
                    if (err) {
                        console.log(err);
                        res.send('Error al registrar el usuario');
                    } else {
                        res.redirect('/dashboard');
                    }
                }
            );
        }
    });
};


exports.save = (req, res) => {

    const user = req.body.user;
    const rol = req.body.rol;
    connection.query('INSERT INTO users SET ?', { user: user, rol: rol }, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/dashboard');
        }
    });
}


exports.update = (req, res) => {
    const id = req.body.id;
    const user = req.body.user;
    const rol = req.body.rol;
    connection.query('UPDATE users SET ? WHERE id = ?', [{ user: user, rol: rol }, id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("ID recibido:", id);
            res.redirect('/dashboard');
        }
    });
}