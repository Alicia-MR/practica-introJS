const datos = [
    {
    id: 1,
    nombre: 'Juan',
    habilidades: ['JavaScript', 'HTML', 'CSS'],
    proyectos: [
    { id: 1, nombre: 'Proyecto 1' },
    { id: 2, nombre: 'Proyecto 2' }
    ]
    },
    {
    id: 2,
    nombre: 'María',
    habilidades: ['Python', 'SQL', 'Django'],
    proyectos: [
    { id: 3, nombre: 'Proyecto 3' },
    { id: 4, nombre: 'Proyecto 4' }
    ]
    },
    {
    id: 3,
    nombre: 'Pedro',
    habilidades: ['Java', 'Spring', 'Hibernate'],
    proyectos: [
    { id: 5, nombre: 'Proyecto 5' },
    { id: 6, nombre: 'Proyecto 6' }
    ]
    }
    ];

    /*

    RESULTADOS:

    desarrolladoresJavascript 
[
    {
    "id": 1,
    "nombre": "Juan",
    "habilidades": ["JavaScript", "HTML", "CSS"],
    "proyectos": [
    { "id": 1, "nombre": "Proyecto 1"},
    { "id": 2, "nombre": "Proyecto 2" }
    ]
    }
    ]
     nombresProyectos 
    ['Proyecto 1', 'Proyecto 2', 'Proyecto 3', 'Proyecto 4', 'Proyecto 5',
    'Proyecto 6']

    */

    const desarrolladoresJavascript = (array) => {
        
        return array.filter(dato => dato.habilidades.some(js =>
            js === "JavaScript"));
    };


    const nombresProyectos = (array) => {
        const listado1 = array.map(desarr => desarr.proyectos.map(
            listaProyectos => listaProyectos.nombre));

            // revisar cómo seguir

        return listado1
    };

    console.log(desarrolladoresJavascript(datos));
    console.log(nombresProyectos(datos));