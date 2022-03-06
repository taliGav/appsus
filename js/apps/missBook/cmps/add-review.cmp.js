import { bookService } from "../service/books-service.js";

export default {
    props: ['book'],
    template: `
    <section class="add-review">
        <div class="createReview">
            Add review:
            <div class="review-info">
                <input ref="userName" class="review-name" type="text" v-model="review.name" placeholder="Enter name">
                <select v-model="review.rate" name="review-rate" id="review-rate" size="1">
                    <option v-for="star in stars" :value="star">{{'⭐'.repeat(star)}}</option>
                </select>
                <input v-model="review.date" type="date">
            </div>
            <textarea v-model="review.body" name="review-body" id="review-body" cols="50" rows="5"  placeholder="Enter comment"></textarea>
            <div>
                <button @click="sendReview">Submit</button>
            </div>
        </div>
    </section>`,
    data() {
        return {
            review: {
                name: null,
                body: null,
                rate: null,
                date: new Date().toISOString().slice(0, 10),
            },
            stars: [1, 2, 3, 4, 5]
        };
    },
    created() {
    },
    methods: {
        sendReview() {
            if (!this.review.name || !this.review.body || !this.review.rate || !this.review.date) return;
            bookService.addReview(this.book, { ...this.review });
            this.review = {
                name: null,
                body: null,
                rate: null,
                date: new Date().toISOString().slice(0, 10)
            };
            console.log(this.book);
        }
    },
    computed: {
    },
    mounted() {
        this.$refs.userName.focus();
    }
};