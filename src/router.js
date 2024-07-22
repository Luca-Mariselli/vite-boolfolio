import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './components/views/AppHome.vue';
import AppAbout from './components/views/AppAbout.vue';
import Projects from './components/views/ProjectsList.vue';
import AppContacts from './components/views/AppContacts.vue';
// import SingleProject from './components/views/SingleProject.vue';
// import AppContacts from './components/views/AppContacts.vue';

const router = createRouter({
history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home', 
            component: AppHome
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: AppContacts
        },
        { 
            path: '/projects',
            name: 'projects',
            component: Projects
        },
        // {
        //     path: '/projects/:slug',
        //     name: 'project',
        //     component: SingleProject
        // },

    ]
});
export { router };