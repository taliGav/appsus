export default {

    template: `
        <section class="email-filter">
                <input @input="setFilter" type="text" v-model="filterBy.textFilterd" placeholder="🔍 Search">
        </section>
        `,
    data() {
        return {
            filterBy: {
                textFilterd: '',
            }
        };
    },
    methods: {
        setFilter() {
            this.$emit('filtered', this.filterBy);
        }
    }
};
