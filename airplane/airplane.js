//class airplane {
// Clase avion

// Acciones: Dispara, velocidad, movimientos laterales, vida.
// Partes: Alas, armas, 
//}

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        console.log('Hola mi nombre es' + this.nombre + 'y tengo' + this.edad);   
    }

}

let persona = new Persona('Diego', 30);

persona.saludar();