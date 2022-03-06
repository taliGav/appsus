export default {
    template: `
    <section class="book-filter">
        <label>
            Search
            <input class="filteByName" @input="setFilter" type="text" v-model="filterBy.title" placeholder="Search">
        </label>
        <div class="filteByNum">
            <label>
                min:
                <input @input="setFilter" type="number" v-model="filterBy.fromPrice">
            </label>
            <label>
                max:
                <input @input="setFilter" type="number" v-model="filterBy.toPrice">
            </label>
        </div>
    </section>
    `,
    data() {
        return {
            filterBy: {
                title: '',
                toPrice: 0,
                fromPrice: 0
            }
        };
    },
    methods: {
        setFilter() {
            this.$emit('filtered', { ...this.filterBy });
        }
    },
}