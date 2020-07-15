<template>
	<div id="app">
		<b-container>
      <b-row class="mt-3">
          <b-col class="text-right">
              <img alt="Vue logo" width="50px" src="./assets/logo.png">
          </b-col>

          <b-col class="text-left align-self-center">
              Vue Boilerplate
          </b-col>
      </b-row>

			<nav id="nav">
          <b-button variant="outline-success" class="mr-3"><router-link :to="'/' + $i18n.locale + '/'">Home</router-link></b-button>
          <b-button variant="outline-success"><router-link :to="'/' + $i18n.locale + '/features'">Features</router-link></b-button>

			</nav>

			<router-view/>

      <Footer></Footer>
		</b-container>
	</div>
</template>

<script>
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Footer 
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

   h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
}

#nav {
  padding: 30px;

  a {
    color: #2c3e50;
    
    &.router-link-exact-active {
      color: #42b983;
    }

    &:hover {
      text-decoration: none;
    }
  }
}
</style>
