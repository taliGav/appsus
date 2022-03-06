export default {
    props: ['info', 'id'],
    template: `
        <section class="note-preview">
            <div class="note-preview-details">
            <h3 class="note-title" @keyup="update" contenteditable="true">{{info.title}}</h3>
                <h3>{{note.type}}</h3>
                <h3>{{note.info.txt}}</h3>
                <h4>{{note.isPinned}}</h4>
                <button @click="deleteCurrNote(id)">X</button>
            </div>
        </section>`,
    data() {
        return {
        };
    },
    methods: {},
    computed: {
        deleteCurrNote() {
            this.$emit('delete', this.id);
        }
    }
}

//    {
//     id: "n103",
//     type: "note-todos",
//     info: {
//     label: "Get my stuff together",
//     todos: [
//     { txt: "Driving liscence", doneAt: null },
//     { txt: "Coding power", doneAt: 187111111 }
//     ]
//     }
   