import BookSearch from './../BookSearch';
import BookServiceMock from './BookServiceMock';

describe('mock book', () => {

    it('should return titulo mock', () => {

        let service = new BookServiceMock();

        let search = new BookSearch(service);

        let book = search.getBook(1234);

        console.log(typeof book);

        expect('Harry Potter').toBe(book.getTitulo());
    });
});