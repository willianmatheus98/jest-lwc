import Book from "./Book";

export default class BookSearch{

    service;

    constructor(service){
        this.service = service;
    }
    
    getBook(isbn){
        let json = this.service.search(isbn);
        let jsonObject = JSON.parse(json);
        let titulo = jsonObject.titulo;

        return new Book(titulo);
    }

}