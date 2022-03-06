export default {
    template: `
        <section class="email-folder-list" >
            <nav class="nav-links">
                <router-link to="/email/compose" >
                    <button>
                    <p>Create</p>        
                    <img  src="./css/img/writing-bw.png" alt="Create">
                    <img  src="./css/img/writing-clr.png" alt="Create">
                </button>
                </router-link>
            <button @click="setFilterBy('Inbox')">
                <router-link to="/email/inbox" >
                    <p>Inbox</p>
                    <img src="./css/img/inbox-bw.png" alt="Inbox">
                    <img src="./css/img/inbox-clr.png" alt="Inbox">
                </router-link >
            </button>
            <button  @click="setFilterBy('Sent')">
                <router-link to="/email/sent">
                    <p>Sent</p>
                    <img src="./css/img/sent-bw.png" alt="Sent">
                    <img src="./css/img/sent-clr.png" alt="Sent">
                </router-link >
            </button>
            <!-- <router-link to="/email/stared" @click="setFilterBy('Stared')">
                <button>
                    <p>Stared</p>
                    <img src="./css/img/star-bw.png" alt="Star">
                    <img src="./css/img/star-clr.png" alt="Star">
                </button>
            </router-link > -->
            <button @click="setFilterBy('Drafts')">
                <router-link to="/email/drafts" >
                    <p>Drafts</p>
                    <img src="./css/img/drafts-bw.png" alt="Drafts">
                    <img src="./css/img/drafts-clr.png" alt="Drafts">
                </router-link >
            </button>
            <button @click="setFilterBy('Trash')">
                <router-link to="/email/trash" >
                    <p>Trash</p>
                    <img src="./css/img/trash-bw.png" alt="Trash">
                    <img src="./css/img/trash-clr.png" alt="Trash">
                </router-link >
            </button>
            </nav>
        </section>
    `,
    data() {
        return {
        };
    },
    components: {
    },
    created() {
    },
    methods: {
        setFilterBy(filter) {
            this.$emit('setFilterBy', filter);
        }
    },
    computed: {
    },
    mounted() {
    },
    unmounted() {
    }
};