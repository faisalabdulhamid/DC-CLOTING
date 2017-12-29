'use strict'

export default function configRouter() {
	return [
        { name: 'login', path: '/login', component: function(resolve){
        	require(['./../components/login.vue'], resolve)
        }},
        { name: 'content', path: '/', component: function(resolve){
        	require(['./../components/content.vue'], resolve)
        }, meta: {Auth: true, menu: 'content'}},

        { path: '/pegawai', component: function(resolve){
                require(['./../components/pegawai/pegawai'], resolve)
            }, 
            children: [
                {name: 'pegawai-index', path:'/', component: function(resolve){
                    require(['./../components/pegawai/index'], resolve)
                }, meta:{menu: 'pegawai'}},
                {name: 'pegawai-tambah', path:'/pegawai/tambah', component: function(resolve){
                    require(['./../components/pegawai/create'], resolve)
                }, meta:{menu: 'pegawai'}},
                {name: 'pegawai-edit', path:'/pegawai/:id/ubah', component: function(resolve){
                    require(['./../components/pegawai/edit'], resolve)
                }, props: true, meta:{menu: 'pegawai'}},
            ],
            meta: {Auth: true}
        },

        { path: '/kuesioner', component: function(resolve){
                require(['./../components/kuesioner/kuesioner'], resolve)
            }, 
            children: [
                {name: 'kuesioner-index', path:'/', component: function(resolve){
                    require(['./../components/kuesioner/index'], resolve)
                }, meta:{menu: 'kuesioner'}},
                {name: 'kuesioner-tambah', path:'/kuesioner/tambah', component: function(resolve){
                    require(['./../components/kuesioner/create'], resolve)
                }, meta:{menu: 'kuesioner'}},
                {name: 'kuesioner-edit', path:'/kuesioner/:id/ubah', component: function(resolve){
                    require(['./../components/kuesioner/edit'], resolve)
                }, props: true, meta:{menu: 'kuesioner'}},
            ],
            meta: {Auth: true}
        },

        { path: '/provinsi', component: function(resolve){
                require(['./../components/provinsi/provinsi'], resolve)
            }, 
            children: [
                {name: 'provinsi-index', path:'/', component: function(resolve){
                    require(['./../components/provinsi/index'], resolve)
                }, meta:{menu: 'provinsi'}},
                {name: 'provinsi-tambah', path:'/provinsi/tambah', component: function(resolve){
                    require(['./../components/provinsi/create'], resolve)
                }, meta:{menu: 'provinsi'}},
                {name: 'provinsi-edit', path:'/provinsi/:id/ubah', component: function(resolve){
                    require(['./../components/provinsi/edit'], resolve)
                }, props: true, meta:{menu: 'provinsi'}},
            ],
            meta: {Auth: true}
        },

        { path: '/kota', component: function(resolve){
                require(['./../components/kota/kota'], resolve)
            }, 
            children: [
                {name: 'kota-index', path:'/', component: function(resolve){
                    require(['./../components/kota/index'], resolve)
                }, meta:{menu: 'kota'}},
                {name: 'kota-tambah', path:'/kota/tambah', component: function(resolve){
                    require(['./../components/kota/create'], resolve)
                }, meta:{menu: 'kota'}},
                {name: 'kota-edit', path:'/kota/:id/ubah', component: function(resolve){
                    require(['./../components/kota/edit'], resolve)
                }, props: true, meta:{menu: 'kota'}},
            ],
            meta: {Auth: true}
        },

        { path: '/promosi', component: function(resolve){
                require(['./../components/promosi/promosi'], resolve)
            }, 
            children: [
                {name: 'promosi-index', path:'/', component: function(resolve){
                    require(['./../components/promosi/index'], resolve)
                }, meta:{menu: 'promosi'}},
                {name: 'promosi-tambah', path:'/promosi/tambah', component: function(resolve){
                    require(['./../components/promosi/create'], resolve)
                }, meta:{menu: 'promosi'}},
                {name: 'promosi-edit', path:'/promosi/:id/ubah', component: function(resolve){
                    require(['./../components/promosi/edit'], resolve)
                }, props: true, meta:{menu: 'promosi'}},
            ],
            meta: {Auth: true}
        },

        { path: '/pelanggan', component: function(resolve){
                require(['./../components/pelanggan/pelanggan'], resolve)
            }, 
            children: [
                {name: 'pelanggan-index', path:'/', component: function(resolve){
                    require(['./../components/pelanggan/index'], resolve)
                }, meta:{menu: 'pelanggan'}},
                {name: 'pelanggan-tambah', path:'/pelanggan/tambah', component: function(resolve){
                    require(['./../components/pelanggan/create'], resolve)
                }, meta:{menu: 'pelanggan'}},
                {name: 'pelanggan-edit', path:'/pelanggan/:id/ubah', component: function(resolve){
                    require(['./../components/pelanggan/edit'], resolve)
                }, props: true, meta:{menu: 'pelanggan'}},
            ],
            meta: {Auth: true}
        },

        { path: '/kategori', component: function(resolve){
                require(['./../components/kategori/kategori'], resolve)
            }, 
            children: [
                {name: 'kategori-index', path:'/', component: function(resolve){
                    require(['./../components/kategori/index'], resolve)
                }, meta:{menu: 'kategori'}},
                {name: 'kategori-tambah', path:'/kategori/tambah', component: function(resolve){
                    require(['./../components/kategori/create'], resolve)
                }, meta:{menu: 'kategori'}},
                {name: 'kategori-edit', path:'/kategori/:id/ubah', component: function(resolve){
                    require(['./../components/kategori/edit'], resolve)
                }, props: true, meta:{menu: 'kategori'}},
            ],
            meta: {Auth: true}
        },

        { path: '/produk', component: function(resolve){
                require(['./../components/produk/produk'], resolve)
            }, 
            children: [
                {name: 'produk-index', path:'/', component: function(resolve){
                    require(['./../components/produk/index'], resolve)
                }, meta:{menu: 'produk'}},
                {name: 'produk-tambah', path:'/produk/tambah', component: function(resolve){
                    require(['./../components/produk/create'], resolve)
                }, meta:{menu: 'produk'}},
                {name: 'produk-edit', path:'/produk/:id/ubah', component: function(resolve){
                    require(['./../components/produk/edit'], resolve)
                }, props: true, meta:{menu: 'produk'}},
                {name: 'produk-show', path:'/produk/:id/lihat', component: function(resolve){
                    require(['./../components/produk/show'], resolve)
                }, props: true, meta:{menu: 'produk'}},
            ],
            meta: {Auth: true}
        },

        { path: '/hasil-kuesioner', component: function(resolve){
                require(['./../components/hasil-kuesioner/kuesioner'], resolve)
            }, 
            children: [
                {name: 'hasil-kuesioner', path:'/', component: function(resolve){
                    require(['./../components/hasil-kuesioner/index'], resolve)
                }, meta:{menu: 'hasil-kuesioner'}},
            ],
            meta: {Auth: true}
        },

        { path: '/desain', component: function(resolve){
            	require(['./../components/desain/desain'], resolve)
            }, 
            children: [
            	{name: 'desain-index', path:'/', component: function(resolve){
            		require(['./../components/desain/index'], resolve)
            	}, meta:{menu: 'desain'}},
                {name: 'desain-tambah', path:'/desain/tambah', component: function(resolve){
                    require(['./../components/desain/create'], resolve)
                }, meta:{menu: 'desain'}},
            ],
            meta: {Auth: true}
        },
    ]
}