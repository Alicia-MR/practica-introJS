const usuario = {
    nombre: "Alicia",
    apellidos: "Maté Ruiz",
    bootcamp: [
        {nombre: "Node.js", fecha: "2025-03-10"},
        {nombre: "Git", fecha: "2025-02-02"},
        {nombre: "React", fecha: "2025-05-12"},
    ],
    busquedaActiva: true,
};

fechaReact = usuario.bootcamp.find(modulo => modulo.nombre.toLowerCase() === "react").fecha;
console.log(fechaReact);