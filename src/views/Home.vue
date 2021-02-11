<template>
  <div>
  <Top/>
  {{this.$root.activeCardIndex}}
  <Card :card="getcardStack[getCardIndex]" />
  <CardStack class="card-stack" v-bind:cardarray="getcardStack"/>
  <button><router-link to="/AddCard">Add Card</router-link></button>
  </div>
</template>

<script>
import CardStack from "../components/CardStack.vue";
import Top from "@/components/Top.vue"
import Card from '../components/Card.vue';


export default {
  components: { 
    CardStack,
    Top,
    Card 
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
      getCardIndex(){
        return this.$root.activeCardIndex;
      },
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