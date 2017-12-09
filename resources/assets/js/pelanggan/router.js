import VueRouter from 'vue-router';

export default new VueRouter({
    routes: [
        {path: '/', component: require('./components/Index.vue'), name: 'index'},
        {path: '/:id/lihat', component: require('./components/Show.vue'), name: 'show', props: true},
        {path: '/create', component: require('./components/Create.vue'), name: 'create'},
        {path: '/:id/edit', component: require('./components/Edit.vue'), name: 'edit', props: true},
        // {path: '/destroy/:id', component: require('./components/destroy.vue'), name: 'destroy'}
    ]
});