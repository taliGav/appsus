export default {
    props: ['info', 'id'],
    template: `
        <section class="note-preview img-preview">
            <div class="img-preview-details">
            <h3 class="note-title" @keyup="update" contenteditable="true">{{info.title}}</h3>
                <!-- <h3 class="note-title" @keyup="update" contenteditable="true">{{info.title}}</h3> -->
                <img :src="info.url"  />
                <!-- <button @click="deleteCurrNote(id)">X</button> -->

            </div>
        </section>`,
    data() {
        return {
            // newTitle: this.info.title,
        };
    },
    methods: {},
    created() {
        console.log(this.info);
    },
    computed: {
        deleteCurrNote() {
            this.$emit('delete', this.id);
        }
    }

    // update(ev) {
    //     this.newTitle = ev.currentTarget.textContent;
    //     this.$emit('update', this.id, this.newTitle);
    //     }
}

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