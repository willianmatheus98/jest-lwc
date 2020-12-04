export default class Book{
    
    titulo;

    constructor(titulo){
        this.setTitulo(titulo);
    }

    getTitulo(){
        return this.titulo;
    }

    setTitulo(titulo){
        this.titulo = titulo;
    }
}