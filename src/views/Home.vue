<template>
  <div>
  <Top/>
  <Card :card="getcardStack[getCardIndex]" />
  <CardStack class="card-stack" v-bind:cardarray="getcardStack"/>
  <button><router-link to="/AddCard" class="routerlink">Add New Card</router-link></button>
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
          },
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

button:hover {
    background-color:black;
    cursor: pointer;
}
button:hover .routerlink {
 color:white;

}

button {
    height: 3.5rem;
    font-size: 1.2rem;
    font-weight: 700;
    border-radius: 0.75rem;
    margin: 2rem 0;
    width: 22rem;
}

a {
    text-decoration: none;
}
a:visited {
  color: black;
}

.card-stack {
  margin: 2rem 0 12rem;
  display: grid;
  grid-auto-rows: 4rem;
}


</style>