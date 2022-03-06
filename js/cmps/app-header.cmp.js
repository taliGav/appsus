export default {
    template: `
    <header class="app-header">
        <router-link class="logo" to="/">
            <h2>Appsus</h2>
            <img src="./css/img/pagsus-clr.png" alt="logo">
        </router-link>
        <button class="nav-bar-opener" @click="toggleButtons">
            <img  src="./css/img/dots.png" alt="logo">
        </button>
        <div class="nav-bar" v-if="isDisplayButtons">
            <div  @click="displayOffButtons">
                <router-link  to="/keep" class="keep-link">
                    <img src="./css/img/keep-bw.png" alt="logo">
                    <img src="./css/img/keep-clr.png" alt="logo">
                    <h4>
                        Keep
                    </h4>
                </router-link>
            </div>
            <div  @click="displayOffButtons">
                <router-link to="/email" class="email-link">
                    <img src="./css/img/email-bw.png" alt="logo">
                    <img src="./css/img/email-clr.png" alt="logo">
                    <h4>
                        Email
                    </h4>
                </router-link>
            </div>
            <div  @click="displayOffButtons">
                <router-link to="/book" class="books-link">
                    <img src="./css/img/books-bw.png" alt="logo">
                    <img src="./css/img/books-clr.png" alt="logo">
                    <h4>
                        Books
                    </h4>
                </router-link>
            </div>
            <div @click="displayOffButtons">
                <router-link to="/about" class="about-link">
                    <img class="about-img" src="./css/img/about-bw.png" alt="logo">
                    <img class="about-img" src="./css/img/about-clr.png" alt="logo">
                    <h4>
                        About
                    </h4>
                </router-link>
            </div>
        </div>
    </header>
    `,
    data() {
        return {
            isDisplayButtons: false,
        };
    },
    computed: {
    },
    methods: {
        toggleButtons() {
            this.isDisplayButtons = !this.isDisplayButtons;
        },
        displayOffButtons() {
            this.isDisplayButtons = false;
        }
    },


};