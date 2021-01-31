<template>
  <div>
  <Top/>
  <CardStack class="card-stack" v-bind:cardarray="getcardStack"/>

  </div>
</template>

<script>
import CardStack from "../components/CardStack.vue";
import Top from "@/components/Top.vue"


export default {
  components: { 
    CardStack,
    Top 
    },

    data () {
      return {
        card: {
          cardNumber:"",
          cardName:"",
          cardMonth:"",
          cardYear:"",
          cardVendor: "",
          }
      }
    },

    computed: {
      getcardStack() {
        return this.$root.cardArray;
      }
    },
    
   
}
</script>

<style scoped>

.card-stack {
  margin: 2rem 0 12rem;
  display: grid;
  grid-auto-rows: 4rem;
}


</style>