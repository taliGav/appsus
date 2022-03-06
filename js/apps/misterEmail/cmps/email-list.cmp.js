import emailPreview from "./email-preview.cmp.js";

export default {
    props: ['emails'],
    template: `
        <section class="email-list">
            <ul>
                <li v-for="email in emails" :key="email.id" >
                    <div class="actions">
                        <input @click="toggle(email,'checked')" type="checkbox">
                        <button @click="toggle(email,'star')">⭐</button>
                        <button @click="toggle(email,'trash')">🗑️</button>
                        <button @click="toggle(email,'read')">👁️</button>
                    </div>
                    <router-link class="email-preview-link" :to="'/email/'+email.id" >
                        <email-preview v-if="email" :email="email"/>
                    </router-link>
                </li>
            </ul>
        </section>
        `,
    components: {
        emailPreview,
    },
    methods: {
        deleteEmail(id) {
            this.$emit('remove', id);
        },
        select(email) {
            this.$emit('select', email);
        },
        toggle(email, info) {
            this.$emit('toggleInfo', email, info);
        }
    },
};




// id;
// subject;
// body;
// isRead;
// sentAt;
// to;
// from