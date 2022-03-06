// import notePreview from "./note-preview.cmp.js";
import txtPreview from "./note-txt.cmp.js";

export default {
    props: ['notes'],
    template: `
        <section class="note-list">
            <ul>
            <div v-for="(cmp, idx) in notes.cmps">
                    <component :is="cmp.type"  :info="cmp.info"></component>
                    <!-- <component :is="cmp.type"  :info="cmp.info" @setVal="setAns($event, idx)"></component> -->
                </div>
                <!-- <li v-for="note in notes" :key="note.id" class="note-preview-container clean-list">
                    <note-preview v-if="note" :note="note"/>
                    <div class="actions">
                        <button>test1</button><button>test2</button>
                        <router-link :to="'/note/'+noteId">actions</router-link> -->
                    <!-- </div>
                </li> -->
            </ul>
        </section>
        `,
    components: {
        txtPreview
        // notePreview,
    },
    data() {
        return {
        };
    },
    created() {
            console.log(this.notes);
        ;
    },
    // created() {
    //     noteService.query()
    //         .then(notes => {
    //             this.notes = notes;
    //             console.log(notes);
    //             console.log(this.notes)});
    // },
    methods: {
    },
    computed: {}
};