export default {
    props: ['note'],
    template: `
        <section class="note-preview">
            <div class="note-preview-details">
                <h3>{{note.id}}</h3>
                <h3>{{note.type}}</h3>
                <h3>{{note.info.txt}}</h3>
                <h4>{{note.isPinned}}</h4>
            </div>
        </section>`,
    data() {
        return {
        };
    },
    methods: {},
    computed: {}
}

// {
//     id: "n101",
//     type: "note-txt",
//     isPinned: true,
//     info: {
//         txt: "Fullstack Me Baby!"
//     }
// },
// {
//     id: "n102",
//     type: "note-img",
//     info: {
//     url: "http://some-img/me",
//     title: "Bobi and Me"
//     },
//     style: {
//     backgroundColor: "#00d"
//     }
//    },
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
   