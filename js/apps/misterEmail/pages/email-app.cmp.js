import { emailService } from "../service/email-service.service.js";
import emailFilter from "../cmps/email-filter.cmp.js";
import emailList from "../cmps/email-list.cmp.js";
import emailFolderList from "../cmps/email-folder-list.cmp.js";
import { eventBus } from "../../../service/eventBus-service.js";
import emailDetails from "./email-details.cmp.js";
import emailCompose from "./email-compose.cmp.js";


export default {
    template: `
        <section class="email-app page-height">
            
            <nav class="nav-links">
                <email-folder-list @setFilterBy="getEmailsByStatus"/>
            </nav>

            <div class="emails-container">
                <router-view :emails="emails" :lastStatus="lastStatus"></router-view>
            </div>

            <email-details v-if="selectedEmail" :email="selectedEmail" @close="selectedEmail = null" />
        
        </section>
        `,
    data() {
        return {
            emails: null,
            selectedEmail: null,
            filterBy: null,
            lastStatus: null
        };
    },
    components: {
        emailFilter,
        emailList,
        emailDetails,
        emailCompose,
        emailFolderList,
    },
    created() {
        emailService.query()
            .then(emails => {
                this.emails = emails
                console.log(this.emails)});
    },
    methods: {
        selectEmail(email) {
            this.selectedEmail = email;
        },
        sendMail(email) {
            this.emails.push(email);
        },
        getEmailsByStatus(status) {
            console.log(status);
            this.lastStatus = status
            const emailsByStatus = this.emails.filter(email => email.status === status);
            console.log(emailsByStatus);
            eventBus.emit('getFilteredEmailsByStatus', emailsByStatus);
        }
    },
    computed: {
        emailsForDisplay() {
            if (!this.filterBy) return this.emails;
            const regex = new RegExp(this.filterBy.textFilterd, 'i');
            return this.emails.filter(email => regex.test(email.body) || regex.test(email.subject) || regex.test(email.to));
        }
    },
};