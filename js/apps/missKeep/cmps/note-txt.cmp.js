export default {
    props: ['info', 'id'],
    template: `
            <section class="note-preview txt-preview">
            <div class="txt-preview-details" >
                <h3 class="note-title" @keyup="update" contenteditable="true">{{info.title}}</h3>
                <p  class="note-text" @keyup="update" contenteditable="true">{{info.txt}}</p>
                <!-- <button @click="deleteCurrNote(id)">X</button> -->
            </div>
        </section>`,
    data() {
        return {
            newTitle: this.info.title,
            newTxt: this.info.txt
        };
    },
    methods: {
        update(ev) {
            if (ev.path[0].localName === 'h3') this.newTitle = ev.currentTarget.textContent;
            if (ev.path[0].localName === 'p') this.newTxt = ev.currentTarget.textContent;
            this.$emit('update', this.id, this.newTitle, this.newTxt);
            },
        },
        computed: {
            deleteCurrNote() {
                this.$emit('delete', this.id);
            }
        }
    };