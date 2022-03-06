export default {
    props: ['txt'],
    template: `
    <section class="long-text">
        <p>
            <u>
                Description:
            </u>
                {{adjustTxt}}
            <a v-if="isLongTxtMode" @click="toggleLongTxt">
                {{ReadMoreLess}}
            </a>
        </p>
    </section>`,
    data() {
        return {
            isLongTxt: false
        };
    },
    created() {
        console.log('this.txt is:', this.txt);
    },
    methods: {
        toggleLongTxt() {
            this.isLongTxt = !this.isLongTxt;
            console.log(this.isLongTxt);
        }
    },
    computed: {
        adjustTxt() {
            if (this.txt.length <= 100 || this.isLongTxt) return this.txt;
            else {
                const newTxt = this.txt.substring(0, 97) + '...';
                return newTxt;
                console.log('this.txt is:', newTxt);
            }
        },
        isLongTxtMode() {
            return (this.txt.length > 100);
        },
        ReadMoreLess() {
            return this.isLongTxt ? 'Less' : 'Read More';
        }

    }
}