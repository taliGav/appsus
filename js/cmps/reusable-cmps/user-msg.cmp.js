import { eventBus } from '../../service/eventBus-service.js';

export default {
    template: `
        <section v-if="msg" class="user-msg" :class="msg.type">
            <p>{{msg.txt}}</p>
        </section>
    `,
    data() {
        return {
            msg: null
        };
    },
    created() {
        this.unsubscribe = eventBus.on('show-msg', this.showMsg);
    },
    methods: {
        showMsg(msg) {
            this.msg = msg;
            setTimeout(() => {
                this.msg = null;
            }, 3000);
        }
    },
    unmounted() {
        this.unsubscribe();
    }
};


    //             .then(() => {
    //                 eventBus.emit('show-msg', { txt: 'mail sent', type: 'success' });
    //             })
    //             .catch(err => {
    //                 console.error(err);
    //                 eventBus.emit('show-msg', { txt: 'Error - please try again later', type: 'error' });
    //             });
