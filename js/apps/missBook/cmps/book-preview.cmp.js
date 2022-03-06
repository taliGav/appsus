export default {
    props: ['book'],
    template: `
        <section class="book-preview">
            <div v-if="book.listPrice.isOnSale" class="onSale">on sale!</div>
            <div class="book-preview-details">
                <img :src="book.thumbnail" alt="book cover">
                <h3>{{book.title}}</h3>
                <h4>{{formatCurrency}}</h4>
            </div>
        </section>`,
    data() {
        return {

        };
    },
    methods: {},
    computed: {
        formatCurrency() {
            return new Intl.NumberFormat('en-IN', { style: 'currency', currency: `${this.book.listPrice.currencyCode}` }).format(this.book.listPrice.amount);
        }
    }
}