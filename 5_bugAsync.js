// Este programa simula una llamada asincrónica para obtener un usuario
/*
function obtenerUsuario(id) {
    let usuario;
    setTimeout(() => {
    if (id === 1) {
    usuario = { id: 1, nombre: 'John Doe' };
    }
    }, 2000);
    return usuario;
    }
    const usuario = obtenerUsuario(1);
    console.log(usuario);
    */

function obtenerUsuario(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (id === 1) {
                resolve({ id: 1, nombre: 'John Doe'});
            } else {
                console.log('User not found')
            }
        }, 2000);
    });
};

const user = async (id) => {
    try {
        const usuario = await obtenerUsuario(id);
        console.log(usuario);
    } catch {
        console.log('Se ha producido un error')
    };
};

user(1);