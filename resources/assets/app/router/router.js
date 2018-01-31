import Vue from 'vue'
import VueRouter from 'vue-router'

// container
import FullClient from './../container/FullClient'
import FullAdmin from './../container/FullAdmin'
import store from './../store/index'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'hash',
	linkActiveClass: 'open active',
	routes: [
		// Client
		{
			path: '/',
			name: 'Client',
			component: FullClient,
			redirect: '/',
			children: [
				{
					path: '/',
					name: 'Home Client',
					component: require('./../client/home')
				},
				{
					path: '/produk',
					name: 'Produk Client',
					component: require('./../client/produk')
				},
				{
					path: '/kuesioner',
					name: 'Kuesioner Client',
					component: require('./../client/kuesioner'),
					meta: {AuthClient: true}
				},
				{
					path: '/about',
					name: 'About Client',
					component: require('./../client/about')
				},
				{
					path: '/desain',
					name: 'Desain Client',
					component: require('./../client/desain')
				},
				{
					path: '/contact',
					name: 'Contact Client',
					component: require('./../client/contact')
				},
				{
					path: '/desain-upload',
					name: 'Upload Deasin',
					component: require('./../client/uploadDesain')
				},
			]
		},
		{
			path: '/login',
			name: 'Login',
			redirect: '/login/client',
			component: { 
				render (c) {return c('router-view') }
			},
			children: [
				{
					path: '/login/client',
					name: 'Login Client',
					component: require('./../client/login')
				}
			]
		},

		/*------------- ADMIN -------------------------*/
		{
			path: '/admin',
			name: 'Home',
			component: FullAdmin,
			redirect: '/admin/pegawai',
			meta: {AuthAdmin: true, isAdmin: 'admin'},
			children: [
				{
					path: '/admin/home',
					name: 'Dashboard',
					component: require('./../admin/home'),
					meta: {AuthAdmin: true, isAdmin: 'admin'}
				},
			]
		},
		//Pegawai
		{
			path: '/admin/pegawai',
			name: 'Pegawai',
			component: FullAdmin,
			redirect: '/admin/pegawai',
			meta: {AuthAdmin: true, isAdmin: 'admin'},
			children: [
				{
					path: '/admin/pegawai',
					name: 'Data Pegawai',
					component: require('./../admin/pegawai/'),
					meta: {AuthAdmin: true, isAdmin: 'admin'}
				},
				{
					path: '/admin/pegawai/create',
					name: 'Tambah Pegawai',
					component: require('./../admin/pegawai/form'),
					meta: {AuthAdmin: true, isAdmin: 'admin'}
				},
				{
					path: '/admin/pegawai/:id/edit',
					name: 'Edit Pegawai',
					component: require('./../admin/pegawai/form'),
					props: true,
					meta: {AuthAdmin: true, isAdmin: 'admin'}
				},
			]
		},
		//Pelanggan
		{
			path: '/admin/pelanggan',
			name: 'Pelanggan',
			component: FullAdmin,
			redirect: '/admin/pelanggan',
			meta: {AuthAdmin: true, isAdmin: 'admin'},
			children: [
				{
					path: '/admin/pelanggan',
					name: 'Data Pelanggan',
					component: require('./../admin/pelanggan/'),
					meta: {AuthAdmin: true, isAdmin: 'admin'}
				},
				{
					path: '/admin/pelanggan/create',
					name: 'Tambah Pelanggan',
					component: require('./../admin/pelanggan/form'),
					meta: {AuthAdmin: true, isAdmin: 'admin'}
				},
				{
					path: '/admin/pelanggan/:id/edit',
					name: 'Edit Pelanggan',
					component: require('./../admin/pelanggan/form'),
					props: true,
					meta: {AuthAdmin: true, isAdmin: 'admin'}
				},
			]
		},
		//transaksi
		{
			path: '/admin/transaksi',
			name: 'transaksi',
			component: FullAdmin,
			redirect: '/admin/transaksi',
			meta: {AuthAdmin: true, isAdmin: 'admin'},
			children: [
				{
					path: '/admin/transaksi',
					name: 'Data transaksi',
					component: require('./../admin/transaksi/'),
					meta: {AuthAdmin: true, isAdmin: 'admin'}
				},
				{
					path: '/admin/transaksi/create',
					name: 'Tambah transaksi',
					component: require('./../admin/transaksi/form'),
					meta: {AuthAdmin: true, isAdmin: 'admin'}
				},
				{
					path: '/admin/transaksi/:id/edit',
					name: 'Edit transaksi',
					component: require('./../admin/transaksi/form'),
					props: true,
					meta: {AuthAdmin: true, isAdmin: 'admin'}
				},
			]
		},
		//kuesioner
		{
			path: '/admin/kuesioner',
			name: 'kuesioner',
			component: FullAdmin,
			redirect: '/admin/kuesioner',
			meta: {AuthAdmin: true, isAdmin: 'admin'},
			children: [
				{
					path: '/admin/kuesioner',
					name: 'Data kuesioner',
					component: require('./../admin/kuesioner/'),
					meta: {AuthAdmin: true, isAdmin: 'admin'}
				},
				{
					path: '/admin/kuesioner/create',
					name: 'Tambah kuesioner',
					component: require('./../admin/kuesioner/form'),
					meta: {AuthAdmin: true, isAdmin: 'admin'}
				},
				{
					path: '/admin/kuesioner/:id/edit',
					name: 'Edit kuesioner',
					component: require('./../admin/kuesioner/form'),
					props: true,
					meta: {AuthAdmin: true, isAdmin: 'admin'}
				},
				{
					path: '/admin/kuesioner/hasil',
					name: 'Hasil kuesioner',
					component: require('./../admin/kuesioner/hasil'),
					meta: {AuthAdmin: true, isAdmin: 'admin'}
				},
			]
		},
		//produk
		{
			path: '/admin/produk',
			name: 'produk',
			component: FullAdmin,
			redirect: '/admin/produk',
			meta: {AuthAdmin: true, isAdmin: 'admin'},
			children: [
				{
					path: '/admin/produk',
					name: 'Data produk',
					component: require('./../admin/produk/'),
					meta: {AuthAdmin: true, isAdmin: 'admin'}
				},
				{
					path: '/admin/produk/create',
					name: 'Tambah produk',
					component: require('./../admin/produk/form'),
					meta: {AuthAdmin: true, isAdmin: 'admin'}
				},
				{
					path: '/admin/produk/:id/edit',
					name: 'Edit produk',
					component: require('./../admin/produk/form'),
					props: true,
					meta: {AuthAdmin: true, isAdmin: 'admin'}
				},
			]
		},
		//promosi
		{
			path: '/admin/promosi',
			name: 'promosi',
			component: FullAdmin,
			redirect: '/admin/promosi',
			meta: {AuthAdmin: true, isAdmin: 'admin'},
			children: [
				{
					path: '/admin/promosi',
					name: 'Data promosi',
					component: require('./../admin/promosi/'),
					meta: {AuthAdmin: true, isAdmin: 'admin'}
				},
				{
					path: '/admin/promosi/create',
					name: 'Tambah promosi',
					component: require('./../admin/promosi/form'),
					meta: {AuthAdmin: true, isAdmin: 'admin'}
				},
				{
					path: '/admin/promosi/:id/edit',
					name: 'Edit promosi',
					component: require('./../admin/promosi/form'),
					props: true,
					meta: {AuthAdmin: true, isAdmin: 'admin'}
				},
			]
		},
		//Desain
		{
			path: '/admin/desain',
			name: 'Desain',
			component: FullAdmin,
			redirect: '/admin/desain',
			meta: {AuthAdmin: true, isAdmin: 'admin'},
			children: [
				{
					path: '/admin/desain',
					name: 'Data Desain',
					component: require('./../admin/desain/'),
					meta: {AuthAdmin: true, isAdmin: 'admin'}
				},
				{
					path: '/admin/desain/create',
					name: 'Tambah Desain',
					component: require('./../admin/desain/form'),
					meta: {AuthAdmin: true, isAdmin: 'admin'}
				},
				{
					path: '/admin/desain/:id/edit',
					name: 'Edit Desain',
					component: require('./../admin/desain/form'),
					props: true,
					meta: {AuthAdmin: true, isAdmin: 'admin'}
				}
			]
		},
		{
			path: '/admin/login',
			name: 'Login Admin',
			redirect: '/admin/login',
			component: { 
				render (c) {return c('router-view') }
			},
			children: [
				{
					path: '/admin/login',
					name: 'Login Admin',
					component: require('./../admin/login'),
					meta: {isAdmin: 'admin'}
				}
			],
		},
		/*------------- ADMIN -------------------------*/
	]
})

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.AuthClient)) {
		if (!store.state.oauth.isLoggedIn) {//true == islogin
			next({name: 'Login Client'})
		}else{
			next()
		}
	}
	else{
		next()
	}

	if (to.matched.some(record => record.meta.AuthAdmin)) {
		if (!store.state.oauth.isLoggedInAdmin) {//true == islogin
			next({name: 'Login Admin'})
		}else{
			next()
		}
	}
	else{
		next()
	}
})

export default router;