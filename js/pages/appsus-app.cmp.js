export default {

    props:['??'],
    template: `
        <section class="appsus-app page-height">
            <!-- <book-filter @filtered="setFilter" />
            <book-list v-if="books" :books="booksToShow" @selected="selectBook" /> -->
            <!-- <book-details v-if="selectedBook" :book="selectedBook" @close="selectedBook = null" /> -->
        </section>
        `,
    data() {
        return {
            books: null,
            filterBy: null,
            selectedBook: null
        };
    },
    components: {
        // bookFilter,
        // bookList,
        // bookDetails
    },
    created() {
        // bookService.query()
        //     .then(books =>  this.books = books)
    },
    methods: {
        // setFilter(filterBy) {
        //     this.filterBy = filterBy;
        // },
        // selectBook(book) {
        //     // console.log(book);
        //     // .then(book =>  this.selectedBook = book)
        //     this.selectedBook = book;
        // }
    },
    computed: {
        // booksToShow() {
        //     if (!this.filterBy) return this.books;
        //     const regex = new RegExp(this.filterBy.title, 'i');
        //     return this.books.filter(book => regex.test(book.title));
        // }
    }
}