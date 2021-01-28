<template>
  <div>
    <CardStack v-bind:card="card"/>
  </div>
</template>

<script>
import CardStack from "../components/CardStack.vue";

export default {
  components: { 
    CardStack 
    },
    data () {
      return {
        card: {
          cardNumber:"",
          cardName:"",
          cardMonth:"",
          cardYear:"",
          vendor: "",
          }
      }
    }
}
</script>

<style scoped>

</style>