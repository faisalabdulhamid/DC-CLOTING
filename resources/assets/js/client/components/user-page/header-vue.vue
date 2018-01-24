<template>
	        <header class="navbar navbar-fixed-top">
                <div class="header-nav">
                    <div class="container">
                        <div class="navbar-header">
                          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                          </button>
                          <router-link class="navbar-brand" :to="{name:'home'}">DC-CLOTHING</router-link>
                        </div>
                        <div id="navbar" class="navbar-collapse collapse">
                          <ul class="nav navbar-nav">
                            <li><router-link :to="{name:'home'}">Home</router-link></li>
                            <li><router-link :to="{name:'produk'}">Produk</router-link></li>
                            <li><router-link :to="{name:'kuesioner'}">Kuesioner</router-link></li>
                            <li><router-link :to="{name:'desain'}">Desain</router-link></li>
                            <li><router-link :to="{name:'about'}">About</router-link></li>
                            <li><router-link :to="{name:'contact'}">Contact</router-link></li>
                          </ul>
                        </div><!--/.nav-collapse -->
                    </div>
                </div>
            </header>
</template>

<script>
	export default{
		name: 'Header-Vue'
	}
</script>