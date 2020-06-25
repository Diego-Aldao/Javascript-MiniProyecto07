(function () {
  let imagenPersona = document.querySelector(".persona");
  let descripcion = document.querySelector(".descripcion");
  let nombre = document.querySelector(".nombre");
  const flechaDerecha = document.querySelector(".flecha-derecha");
  const flechaIzquierda = document.querySelector(".flecha-izquierda");

  let contador = 0;

  let personas = [];

  //Costructor persona
  function Persona(imagen, descripcion, nombre) {
    this.imagen = imagen;
    this.descripcion = descripcion;
    this.nombre = nombre;
  }

  //Funcion que crea una persona con constructor
  function crearPersona(imagen, descripcion, nombre) {
    let imagenUrl = `./images/personas/${imagen}.jpg`;
    let persona = new Persona(imagenUrl, descripcion, nombre);

    personas.push(persona);
  }

  crearPersona(
    1,
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, voluptas nihil! Placeat sapiente ipsum possimus esse voluptatum dolore sequi, nobis at temporibus! Vel doloribus",
    "Adriana Silva, Diseñadora"
  );
  crearPersona(
    2,
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi beatae adipisci sint, sapiente provident consequatur. beatae adipisci sint, sapiente provident consequatur.",
    "Gustavo Martinez, Contador"
  );
  crearPersona(
    3,
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi beatae adipisci sint, sapiente provident consequatur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi beatae",
    "Zaira Allez, Modelo"
  );
  crearPersona(
    4,
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi beatae adipisci sint, sapiente provident consequatur. Eligendi beatae",
    "Roberto Gomez, Mecánico"
  );
  crearPersona(
    5,
    "Placeat sapiente ipsum possimus esse voluptatum dolore sequi, nobis at temporibus! Vel doloribus molestias nisi tempore officiis incidunt soluta facere reprehenderit deleniti architecto",
    "Martina Perez, Desarrolladora Web"
  );

  flechaDerecha.addEventListener("click", personaSiguiente);
  flechaIzquierda.addEventListener("click", personaAnterior);

  function personaSiguiente() {
    contador++;
    if (contador == personas.length) {
      contador = 0;
    }
    imagenPersona.src = personas[contador].imagen;
    descripcion.textContent = personas[contador].descripcion;
    nombre.textContent = personas[contador].nombre;
  }

  function personaAnterior() {
    contador--;
    if (contador == -1) {
      contador = personas.length - 1;
    }
    imagenPersona.src = personas[contador].imagen;
    descripcion.textContent = personas[contador].descripcion;
    nombre.textContent = personas[contador].nombre;
  }
})();
