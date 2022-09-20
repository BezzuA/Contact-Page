import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import FriendContact from './components/FriendContact.vue';
import NewFriend from './components/adding-contact/NewFriend.vue';
import DetailsPage from './components/contacts/DetailsPage.vue';
import MainPage from './components/main-page/MainPage.vue';
import NavigationMainPage from './components/nav/Navigation.vue';
import store from './components/store';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: "Home", redirect: '/main-page' },
        { path: '/contacts/:firstname/:lastname', name: "Contacts", component: DetailsPage },
        { path: '/main-page', component: MainPage },
        { path: '/adding-contact', component: NewFriend },
        { path: '/nav', component: NavigationMainPage },
        { path: '/:notFound(.*)', redirect: '/main-page'},
        ]
    });
const app = createApp(App);
library.add(faStar);
library.add(faTrash);
library.add(faPlus);
library.add(faCircleInfo);
library.add(faArrowLeft);
library.add(faMagnifyingGlass);

app.component('friend-contact', FriendContact);
app.component('new-friend', NewFriend);
app.component('details-page', DetailsPage);
app.component('main-page', MainPage);
app.component('nav', NavigationMainPage);
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('store', store);

app.use(router);

app.mount('#app');
