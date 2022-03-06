export default {

    props: ['email'],
    template: `
        <section class="email-preview"  :class="{isRead: email.isRead}">
            <p class="preview-to">{{email.to}}</p>
            <p class="preview-msg">
                <span class="preview-subject">{{email.subject}}</span>
                <p>-</p>
                <span class="preview-body">{{email.body}}</span>
            </p>
            <p class="preview-sentAt">{{dateForDisplay}}</p>
        </section>
        `,
    computed: {
        dateForDisplay() {
            const now = + new Date();
            const date = new Date(this.email.sentAt);
            if (now - this.email.sentAt < 86400) {
                return `${date.getHours()}:${date.getMinutes()}`;
            }
            else if (now - this.email.sentAt < 31556926000) {
                // return '2';
                return `${date.getDate()}/${date.getMonth() + 1}`;
            }
            else {
                return `${date.getFullYear()}`;
            }
        }
    },
}