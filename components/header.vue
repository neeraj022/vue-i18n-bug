<template>
  <div>
  <header class="header clearfix">
    <div class="headMid clearfix">
     <div class="container">

         <div class="select langSelect">
           <span class="select__arrow"><i class="material-icons">&#xE313;</i></span>

         <select class="" @change="changeLanguage" :value="this.$store.state.locale.selectedLocale">
           <option :key='-1' :value='-1'>Language</option>
           <option v-for="locale in this.$store.state.locale.locales"
           :key="locale.code" :value="locale.code">{{locale.name}}</option>
         </select>
         </div>

        <nav class="nav">
             <ul class="nav_main">
                <li v-bind:class="{ active: header.active }" v-for="header in $store.state.header">
                   <nuxt-link :to="$store.state.locale.selectedLocale+'/'+header.link"><i class="material-icons" v-html="materialIconCode(header)"></i>{{$t(`index.${header.name}`)}}</nuxt-link>
                </li>
             </ul>
        </nav>
      </div>
  </div>
  </header>

</div>
</template>
<script>
export default {
  methods: {
    changeLanguage (event) {
      if (event.target.value !== -1) {
        this.$store.dispatch('locale/setlanguage', {context: this, locale: event.target.value})
        // this.i18n.locale = event.target.value
      }
    },
    materialIconCode (header) {
      return header.icon
    }
  }
}
</script>

<style>
</style>
