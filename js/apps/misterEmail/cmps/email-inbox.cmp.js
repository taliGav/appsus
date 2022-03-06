import emailFilter from "./email-filter.cmp.js";
import emailList from "./../cmps/email-list.cmp.js";

import { emailService } from "./../service/email-service.service.js";
import { eventBus } from './../../../service/eventBus-service.js';


export default {
    props: ['emails', 'lastStatus'],
    template: `
        <section class='m-inbox'  @load="status">
            <email-filter v-if="emails" @filtered="setFilter"/>
            <email-list v-if="emails" :emails="emailsForDisplay" @load="status" @toggleInfo="changeToggle"/>
            <!-- <email-list v-if="lastStatus" :emails="status" @toggleInfo="changeToggle"/> -->
        </section>
    `,
    data() {
        return {
            emails: null,
            filterBy: null,
            lastStatus: 'Received'
        };
    },
    components: {
        emailFilter,
        emailList,
    },
    created() {
        console.log('email-inbox');
        console.log('emails', this.emails);
        console.log('lastStatus', this.lastStatus);
        this.unsubscribe = eventBus.on('getFilteredEmailsByStatus', this.emailsData);
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },

        emailsData(data) {
            this.emails = data;
            console.log(this.emails);

        },
        changeToggle(email, info) {
            if (info === 'star') email.isStared = !email.isStared;
            else if (info === 'read') email.isRead = !email.isRead;
            else if (info === 'checked') email.isChecked = !email.isChecked;
            else if (info === 'trash') {
                email.status = 'Trash';
                const idx = this.emails.findIndex((email) => email.id === email.id);
                this.emails.splice(idx, 1);
            };
            emailService.save(email);
        },
        status() {
            console.log(this.emails);
            emailService.query();
            // .then(emails => {
            //     console.log(this.lastStatus);
            //         if (!this.lastStatus) this.lastStatus = 'Received';
            //         console.log(this.lastStatus);
            //         this.emails = emails
            //         console.log(this.emails)
            //         const statusEmails = this.emails.filter(email => email.status === this.lastStatus)
            //         console.log(statusEmails)
            //         return statusEmails ;
            //     });
        }

        // emailsForDisplay() {
        //     if (!this.filterBy) return this.emails;
        //     const regex = new RegExp(this.filterBy.textFilterd, 'i');
        //     this.emails = this.emails.filter(email => regex.test(email.body) || regex.test(email.subject) || regex.test(email.to));
        //     console.log(this.emails);
        // }
    },
    computed: {
        emailsForDisplay() {
            if (!this.filterBy) return this.emails;
            const regex = new RegExp(this.filterBy.textFilterd, 'i');
            return this.emails.filter(email => regex.test(email.body) || regex.test(email.subject) || regex.test(email.to));
        }
    },
    mounted() {
    },
    unmounted() {
        this.unsubscribe();
        console.log(this.emails);
    }
};