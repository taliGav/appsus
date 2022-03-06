export default {
    props: ['info', 'id'],
    template: `
        <section class="note-preview img-preview">
            <div class="img-preview-details">
            <h3 class="note-title" @keyup="update" contenteditable="true">{{info.title}}</h3>
                <!-- <img class="video" :src="info.url"> -->
                <!-- <iframe class="video" width="373" height="210" :src="info.url" /> -->
                <iframe width="373" height="210" src="https://www.youtube.com/embed/1FzEaIbqW3c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                
                <!-- <img :src="imgUrl"  /> -->
                <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/UqyT8IEBkvY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
                <!-- <button @click="deleteCurrNote(id)">X</button> -->
            </div>
        </section>`,
    data() {
        return {
        };
    },
    methods: {},
    computed: {
        deleteCurrNote() {
            this.$emit('delete', this.id);
        }
    }
}



// function renderVideo(videos) {
//     // var strHTML = '';
//     var strHTML = videos.map(video => {
//         return `<button class="card" onclick="onSelectVideo('${video.title}')">
//                     <img class="card-img" src="${video.url}">
//                     <div class="card-info">
//                         <h4>${video.title}</h4>
//                         <small>${video.disc}</small>
//                     </div>
//                 </button>`;
//     }).join('');
//     var videosContainers = document.querySelector(".list-of-videos");
//     videosContainers.innerHTML = strHTML;
//     var currVideo =videos[0].id
//     var videoPlayer =`<iframe class="video" width="840" height="630" src="https://www.youtube.com/embed/${currVideo}"></iframe>`
//     var videoPlayerContainers = document.querySelector(".video-player-area");
//     videoPlayerContainers.innerHTML = videoPlayer;
// }


// <!-- <img class="video" width="400" height="300" :src="https://www.youtube.com/embed/${this.info.url}"> -->
