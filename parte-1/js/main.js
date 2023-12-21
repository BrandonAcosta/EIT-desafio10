function stringPrint(titulo, autor) {
    return(`${titulo}, de ${autor.toUpperCase()}`);
}
class Libro{
    constructor(titulo, autor){
        this.titulo = titulo;
        this.autor = autor;
    }
    mostrarDatosEnConsola(){
        console.log(stringPrint(this.titulo, this.autor));
    }
    mostrarDatosEnAlert(){
        window.alert(stringPrint(this.titulo, this.autor));
    }
    getTitulo(){
        return this.titulo;
    }
    mostrarDatos(method){
        switch (method) {
            case 'alert':
                this.mostrarDatosEnAlert();
                break;
            case 'console':
            default:
                this.mostrarDatosEnConsola();
                break;
        }
    }
}
//----
let unLibro = new Libro('Ángeles y Demonios', 'Dan Brown');
console.log(unLibro);
unLibro.mostrarDatosEnConsola();
unLibro.mostrarDatosEnAlert()
//----
let nuevolibro = new Libro('Fuego y Sangre', 'George R. R. Martin');
let tituloDelNuevoLibro = nuevolibro.getTitulo();
window.alert(tituloDelNuevoLibro);
//----
nuevolibro.mostrarDatos('alert');
nuevolibro.mostrarDatos('console');
nuevolibro.mostrarDatos();