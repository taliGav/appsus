import reviewsScroller from "../cmps/reviews-scroller.cmp.js";
import longText from "../cmps/long-text.cmp.js";
import addReview from "../cmps/add-review.cmp.js";
import { bookService } from "../service/books-service.js";

export default {
    template: `
    <section v-if="book" class="book-details page-height">
        <div  class="book-details-exspand">
            <img :src="book.thumbnail" alt="book cover">
            <div v-if="book.listPrice.isOnSale" id="trapezoid"> SALE!</div>
            <div class="pointer" :style="'background-color:'+getPriceColor" id="pointer-price">
                <p><u>Price:</u><br>{{formatCurrency}}</p>
            </div>
            <div class="pointer" id="pointer-pageCount">
            <u>{{pageCountMsg}}</u>
            </div>
            <div class="pointer" id="pointer-publish">
                <u>{{publishedDateMsg}}</u>
            </div>
            <div  class="book-details-info">
                <h4 class="book-details-title">Book details</h4>
                <p><u>Title:</u>{{book.title}}</p>
                <p><u>Authors:</u></p>
                <ul>
                    <li v-for="author in book.authors" :key="book.authors.idx" >
                        <p>{{author}}</p>
                    </li>
                </ul>
              <long-text v-if="book.description" :txt="book.description"/>
              <p><u>Categories:</u></p>
              <ul>
                 <li v-for="categorie in book.categories" :key="book.categories.idx" >
                     <p>{{categorie}}</p>
                  </li>
              </ul>
              <p><u>Page count:</u>{{book.pageCount}}</p>
              <p><u>Publish date:</u>{{book.publishedDate}}</p>
               <router-link to="/book">Return</router-link>
            </div>
        </div>
        <add-review v-if="book" :book="book"/>
        <reviews-scroller v-if="book.reviews" :book="book"/>
    </section>
    <section v-else>loading</section>
    `,
    components: {
        longText,
        addReview,
        reviewsScroller
    },
    data() {
        return {
            book: null
        };
    },
    created() {
        console.log('this.$route is:', this.$route);
        const id = this.$route.params.bookId;
        bookService.get(id)
            .then(book => this.book = book);
    },
    computed: {
        formatCurrency() {
            return new Intl.NumberFormat('en-IN', { style: 'currency', currency: `${this.book.listPrice.currencyCode}` }).format(this.book.listPrice.amount);
        },
        getPriceColor() {
            if (this.book.listPrice.amount < 20) return '#00ff66f5';
            else if (this.book.listPrice.amount > 150) return 'red';
        },
        publishedDateMsg() {
            const today = new Date();
            const year = today.getFullYear();
            if (year - this.book.publishedDate < 1) return 'NEW!';
            else if (year - this.book.publishedDate > 10) return 'Veteran Book';
            else return this.book.publishedDate;
        },
        pageCountMsg(){
            if (this.book.pageCount > 500) return 'Long reading';
            else if (this.book.pageCount > 200) return 'Decent Reading';
            else if (this.book.pageCount < 100) return 'Light Reading';
            else return this.book.pageCount +' pages'

        }
    }
};