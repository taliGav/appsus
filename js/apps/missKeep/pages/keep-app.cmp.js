import { noteService } from "../services/note.service.js";
import { eventBus } from "./../../../service/eventBus-service.js";
import noteTxt from "./../cmps/note-txt.cmp.js";
import noteImg from "./../cmps/note-img.cmp.js";
import noteTodos from "./../cmps/note-todos.cmp.js";
import noteVideo from "./../cmps/note-video.cmp.js";
import userMsg from "./../../../cmps/reusable-cmps/user-msg.cmp.js";

// import noteList from "./../cmps/note-list.cmp.js";

export default {
    template: `
        <section v-if="notes" class="page-height note-cmps">
            <div class="add-note-container flex">
                <input v-if="newNote" type="text" v-model="newNote.info.title" placeholder="Note Title">
                <input  v-if="newNote" type="text"  v-model="newNote.info.txt" placeholder="Note Text">
                <button  v-if="newNote" @click="saveNote" >Save</button>
                <!-- <input v-if="newNote" type="text" placeholder="newTxtPHolder"> -->
                <button class="add-note" @click="addNote">Add note</button>
            </div>

            <div class="notes-container flex space-between wrap">
                <div class="note-container flex column space-between" v-for="(note, idx) in notes">
                <component :is="note.type"  :info="note.info" :id="note.id" @update="updateNote" @delete="deleteNote"></component>
                <!-- <router-link :to="'/keep/edit/'+note.id">Edit</router-link> -->
                <command-panel class="command-panel-container flex space-between">
                <button @click="deleteNote(note.id)">X</button>
                </command-panel>
                </div>
            </div>
            
        </section>
    `,
    components: {
        noteTxt,
        noteImg,
        noteTodos,
        noteVideo,
        userMsg
        // noteList
    },
    data() {
        return {
            notes: null,
            newNote: ''
            // newNote: noteService.getEmptyTxt()
        };
    },
    created() {
        noteService.query()
            .then(notes => {
                this.notes = notes;
                console.log(notes);
                console.log(this.notes);
            });
    },
    methods: {
        updateNote(id, title, txt) {
            // console.log('id', id);
            // console.log('title', title);
            // console.log('txt', txt);
            // const x = noteService.get(id);
            // console.log(x);
            noteService.get(id)
            .then(() => {
                const idx = this.notes.findIndex((note) => note.id === id);
                this.notes[idx].id = id;
                this.notes[idx].info.title = title;
                this.notes[idx].info.txt = txt;
                console.log(this.notes[idx]);
                console.log(this.notes);
                noteService.save(this.notes[idx]);
            }).then(() => eventBus.emit('show-msg', { txt: 'Updated successfully', type: 'success' }));
        },

        addNote() {
            this.newNote = noteService.getEmptyTxt();
        },

        saveNote() {
            noteService.save(this.newNote)
                .then(() => eventBus.emit('show-msg', { txt: 'Saved successfully', type: 'success' }));
            this.notes.push(this.newNote);
            this.newNote = noteService.getEmptyTxt();
        },

        deleteNote(id) {
            noteService.remove(id)
                .then(() => {
                    const idx = this.notes.findIndex((note) => note.id === id);
                    this.notes.splice(idx, 1);
                })
                .then(() => {
                    eventBus.emit('show-msg', { txt: 'note deleted', type: 'success' });
                })
                .catch(err => {
                    console.error(err);
                    eventBus.emit('show-msg', { txt: 'Error - please try again later', type: 'error' });
                });
        },
    }
};



// <div class="new-note flex space-between">
//        <label for="title"><input type="text" v-model="newNote.info.title" placeholder="Note Title"></label>
//        <label for="note-text"><input type="text"  v-model="newNote.info.txt" placeholder="Note Text"></label>
//        <button @click="addNote" >Save</button>
//           </div>
