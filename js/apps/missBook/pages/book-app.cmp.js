import { bookService } from "../service/books-service.js";
import bookFilter from "../cmps/book-filter.cmp.js";
import bookList from "../cmps/book-list.cmp.js";
import bookDetails from "./book-details.cmp.js";

export default {
    template: `
    <section class="book-app page-height">
    <book-filter @filtered="setFilter"/>  
    <book-list v-if="books" :books="booksForShow" @selected="selectBook"/>
    <!-- <book-details v-if="selectedBook" :book="selectedBook" @close="selectedBook=null"/> -->
    </section>
    `,
    components: {
        bookFilter,
        bookList,
        bookDetails
    },
    data() {
        return {
            books: null,
            selectedBook: null,
            filterBy: null
        };
    },
    created() {
        bookService.query()
            .then(books => this.books = books);
    },
    methods: {
        selectBook(book) {
            this.selectedBook = book;
        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        }
    },
    computed: {
        booksForShow() {
            if (!this.filterBy) return this.books;
            const regex = new RegExp(this.filterBy.title, 'i');
            const min = this.filterBy.fromPrice || 0;
            const max = this.filterBy.toPrice || Infinity;
            return this.books.filter(book => regex.test(book.title) && (min < book.listPrice.amount) && (max > book.listPrice.amount));
        }
    }
};