const express = require('express');
const router = express.Router();


const connection = require('../database/db');
const crud = require('../controllers/crud');



//Ruta para login
router.get('/', (req, res) => {
    res.render('auth/login');
});

//Ruta para autenticar el login
router.post('/login/auth', crud.login);


//Ruta para mostar el formulario de login
router.get('/register', (req, res) => {
    res.render('auth/register');
});


//Ruta para registrar un nuevo usuario
router.post('/register/create', crud.register);


router.get('/dashboard', (req, res) => {
    // Verificar si el usuario está autenticado
    if (!req.session.user) {
        return res.redirect('/');
    }

    const page = parseInt(req.query.page) || 1;
    const limit = 5;
    const offset = (page - 1) * limit;

    // Obtener total de usuarios para la paginación
    connection.query('SELECT COUNT(*) AS total FROM users', (err, countResult) => {
        if (err) {
            console.log(err);
            return res.send('Error al obtener el total de usuarios');
        }

        const totalUsers = countResult[0].total;
        const totalPages = Math.ceil(totalUsers / limit);

        // Obtener los usuarios de la página actual
        connection.query('SELECT * FROM users LIMIT ? OFFSET ?', [limit, offset], (err, result) => {
            if (err) {
                console.log(err);
                return res.send('Error al obtener los usuarios');
            }

            // Renderizar la vista y pasar el nombre del usuario autenticado
            res.render('index', {
                results: result,
                currentPage: page,
                totalPages: totalPages
            });

        });
    });
});

// Ruta para cerrar sesión
router.get('/logout', (req, res) => {
    // Destruir la sesión
    req.session.destroy((err) => {
        if (err) {
            console.log('Error al cerrar sesión', err);
        } else {
            res.redirect('/'); // Redirige al usuario al inicio de sesión
        }
    });
});


//Ruta para crear
router.get('/create', (req, res) => {
    res.render('create');
});


//Ruta para editar
router.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM users WHERE id=?', [id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.render('edit', { user: result[0] });
        }
    });
});

//Ruta para eliminar
router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    connection.query('DELETE FROM users WHERE id=?', [id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/dashboard');
        }
    });
});


router.post('/save', crud.save);
router.post('/update', crud.update);




module.exports = router;