import {createApp} from 'vue';
import App from 'src/App.vue';
import router from 'src/router.js';
import BaseButton from 'components/BaseButton.vue';
import 'awesome/css/all.css';

const app = createApp(App);

app.use(router);
app.component('BaseButton', BaseButton);

app.mount('#app');
