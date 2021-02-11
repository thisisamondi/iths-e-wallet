<template>
  <div>
    <Top/>
    <Card :card="card"></Card>
    <CardForm :card="card"></CardForm>

  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import CardForm from "@/components/CardForm.vue";
import Top from "@/components/Top.vue";

export default {
  components: { 
    Card, 
    CardForm, 
    Top,
    },
  
  data() {
    return {
      card: {
        cardNumber: "",
        cardName: "",
        cardMonth: "",
        cardYear: "",
        cardVendor: "",
      },
    };
  },

  computed: {
    cardStack() {
      return this.$root.$data.cardArray;
    }
  }
};
</script>

<style>
</style>
