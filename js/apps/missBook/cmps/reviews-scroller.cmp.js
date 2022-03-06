export default {
    props: ['book'],
    template: `
    <section class="reviews-scroller">
        <ul>
            <li class="review" v-for="review in book.reviews">
                  <div>
                      <h2>{{review.name}}</h2>
                      <hr>
                      <h3>{{'⭐'.repeat(review.rate)}}</h3>
                      <h4>{{review.date}}</h4>
                      <hr>
                    </div>
                    <div class="review-body">
                        <textarea readonly>{{review.body}}</textarea>
                    </div>
            </li>
        </ul>
    </section>`,
    data() {
        return {

        };
    },
    created() { },
    methods: {},
    computed: {}
}