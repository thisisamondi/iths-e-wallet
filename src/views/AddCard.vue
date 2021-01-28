<template>
  <div>
    <Card :card="card"></Card>
    <CardForm :card="card"></CardForm>
    <ul>
      <li v-for="card in cardStack" :key="card.id">{{ card.number }}</li>
    </ul>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import CardForm from "@/components/CardForm.vue";

export default {
  components: { Card, CardForm },
  data() {
    return {
      card: {
        cardNumber: "",
        cardName: "",
        cardMonth: "",
        cardYear: ""
      }
    };
  },

  computed: {
    cardStack() {
      return this.$root.$data.cardStack;
    }
  }
};
</script>

<style></style>
