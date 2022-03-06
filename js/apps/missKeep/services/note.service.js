import { utilService } from './../../../service/util-service.js';
import { storageService } from './../../../service/async-storage-service.js';

const NOTES_KEY = 'notes';
_createNotes();

export const noteService = {
    query,
    get,
    remove,
    getEmptyTxt,
    post,
    save
    // addNote,
}

function query() {
    return storageService.query(NOTES_KEY);
}

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY);
    if (!notes || !notes.length) {
        notes = [
                {
                    id: "n101",
                    type: "note-txt",
                    isPinned: true,
                    info: {
                        title:'Title',
                        txt: "Fullstack Me Baby!"
                    }
                },
                {
                    id: "n102",
                    type: "note-txt",
                    info: {
                        title: "Bobi and Me",
                        txt: " Baby!"

                    },
                    style: {
                        backgroundColor: "#00d"
                    }
                },
                {
                    id: "n103",
                    type: "note-img",
                    info: {
                        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5OEu4H9bL04EQVyYy4QWTCUlvKjhud4kI-wfHOsX9fj25EnfRprm8TSvfj5UynJb290&usqp=CAU",
                        title: "Bobi and Me"
                    },
                    style: {
                        backgroundColor: "#00d"
                    }
                },
                {
                    id: "n104",
                    type: "note-video",
                    info: {
                        url: "https://www.youtube.com/watch?v=UqyT8IEBkvY",
                        title: "24K MAGIC"
                    },
                    style: {
                        backgroundColor: "#00d"
                    }
                },
                {
                    id: "n105",
                    type: "note-img",
                    info: {
                        url: "https://cdn.vox-cdn.com/thumbor/G_Ts5lMSVPW3grBjSZ924gvyg-s=/0x0:666x444/1200x800/filters:focal(266x140:372x246)/cdn.vox-cdn.com/uploads/chorus_image/image/59491841/Macaca_nigra_self-portrait__rotated_and_cropped_.0.jpg",
                        title: "Bobi and Me"
                    },
                    style: {
                        backgroundColor: "#00d"
                    }
                },

                // {
                //     id: "n103",
                //     type: "note-todos",
                //     info: {
                //         label: "Get my stuff together",
                //         todos: [
                //             { txt: "Driving liscence", doneAt: null },
                //             { txt: "Coding power", doneAt: 187111111 }
                //         ]
                //     }
                // }
            ]
        ;
        utilService.saveToStorage(NOTES_KEY, notes);
    }
    return notes;
}

function post(entityType, newEntity) {
    newEntity.id = _makeId()
    return query(entityType)
        .then(entities => {
            entities.push(newEntity);
            _save(entityType, entities)
            return newEntity;
        })
}

// function remove(noteId) {
//     return storageService.remove(NOTES_KEY, noteId);
// }

function remove(noteId) {
    return storageService.remove(NOTES_KEY, noteId)
}

// function post(NOTES_KEY, newEntity) {
//     newEntity.id = _makeId()
//     return query(entityType)
//         .then(entities => {
//             entities.push(newEntity);
//             _save(entityType, entities)
//             return newEntity;
//         })
// }

function save(note) {
    if (note.id) return storageService.put(NOTES_KEY, note);
    else return storageService.post(NOTES_KEY, note);
}
 
// function save(NOTES_KEY, entities) {
//     localStorage.setItem(NOTES_KEY, JSON.stringify(entities))
// }

function get(noteId) {
    console.log('noteId is:', noteId); 
    return storageService.get(NOTES_KEY, noteId);
}

function getEmptyNoteGeneral(type) {
    return {
        id: '',
        type,
        isPinned: false,
        info: {}
    };
}

function getEmptyTxt() {
    return {
        id: '',
        type: "note-txt",
        isPinned: false,
        info: {
            title:'',
            txt: ''
        }    };
}


function _createNote(type) {
    const note = getEmptyNoteGeneral(type);
    note.id = utilService.makeId();
    return note;
}

function addNote(note, review) {
    note.id = utilService.makeId();
    if (!Array.isArray(book.reviews)) {
        book.reviews = [];
    }
    book.reviews.push(note);
    storageService.put(BOOKS_KEY, book);
    return book;
}

function getEmptyImg(vendor = '', maxSpeed = 0) {
    return {
        id: '',
        vendor,
        maxSpeed,
        prevOwners: []
    };
}
function getEmptyTodos(vendor = '', maxSpeed = 0) {
    return {
        id: '',
        vendor,
        maxSpeed,
        prevOwners: []
    };
}
function getEmptyVideo(type, maxSpeed = 0) {
    return {
        id: '',
        type,
        isPinned: false,
        info: null
    };
}

