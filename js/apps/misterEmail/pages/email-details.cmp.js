import { emailService } from "../service/email-service.service.js";

export default {
    template: `
        <section v-if="email" class="email-details page-height">
            <p>{{email.to}}</p>
            <p>{{email.sentAt}}</p>
            <p>{{email.subject}}</p>
            <p>{{email.body}}</p>
            <router-link to="/email/inbox">Return</router-link>
        </section>
        `,
    data() {
        return {
            email: null
        };
    },
    components: {
    },
    created() {
        const id = this.$route.params.emailId;
        emailService.get(id)
            .then(email => {
                this.email = email;
                this.email.isRead = true;
                emailService.save(this.email);
            });
    },
    methods: {
    },
    computed: {

    },
    mounted() {

    },
    unmounted() {
    }
};