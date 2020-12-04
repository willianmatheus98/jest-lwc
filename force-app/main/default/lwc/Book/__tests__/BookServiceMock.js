import BookService from '../BookService';

export default class BookServiceMock {
    constructor(){}

    search(isbn){
        let book = { titulo: 'Harry Potter'};
        return JSON.stringify(book);
    }
}