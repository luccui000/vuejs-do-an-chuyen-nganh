import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from '@/routes';
import { BootstrapVue3 } from 'bootstrap-vue-3'

import registerComponent from "@/utils/registerComponent";
import "@/utils/stylesheet";

const app = createApp(App);
registerComponent(app);
app.use(store);
app.use(router);
app.use(BootstrapVue3);

app.mount('#app');
