<template>
  <div class="AddCard">
  

    <article class="card evil">
      <header>
        <img v-if="card.cardVendor === 'Bitcoin'" src="@/assets/chip-dark.svg" alt="chip dark"/>
        <img v-else src="@/assets/chip-light.svg" alt="chip light">
        <img v-if="card.cardVendor === 'Evil Corp'" src="@/assets/vendor-evil.svg"/>
        <img v-else if src="" alt=""/>
      </header>

      <section v-if="card.cardNumber" class="number">
        {{ cardNumber }}
      </section>
      <section v-else class="number"></section>

      <section class="info">
        <aside class="holder">
          <span>Cardholder Name</span>
          <p>{{ card.cardName }}</p>
        </aside>
        <aside class="valid">
          <span>Valid until</span>
          <p>{{ card.cardMonth }}/{{ card.cardYear }}</p>
        </aside>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object
    }
  },
  computed: {
    cardNumber() {
      return this.card.cardNumber.match(/.{1,4}/g).join(" ");
    }
  }
};
</script>

<style scoped>
.card {
  max-width: 24rem;
  height: 14rem;
  border-radius: 0.6rem;
  background: #eee;
  padding: 1rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.4);
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.4);
  display: grid;
  gap: 0.5rem 0;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 2.8rem;
  text-shadow: -1px -1px 2px hsla(0, 0%, 100%, 0.4);
}
.evil {
  background: linear-gradient(248.3deg, rgba(0, 0, 0, 0.16), transparent),
    #f33355;
  color: #fff;
}
.card header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  grid-column: auto/span 2;
  grid-row: auto/span 2;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  align-self: flex-end;
  opacity: 1;
}
.card header img {
  opacity: 0.8;
}
.header {
  text-shadow: -1px -1px 2px hsla(0, 0%, 100%, 0.4);
}
.card section.info,
.card section.number {
  grid-column: auto/span 2;
  grid-row: auto/span 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  text-align: start;
}
.card section.number {
  font-size: 1.6rem;
  letter-spacing: 0.05rem;
  padding: 0.5rem 0 0;
  text-transform: uppercase;
}
.card section.info aside.holder {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.card section aside span {
  display: block;
  text-transform: uppercase;
  font-size: 0.7rem;
  margin: 0 0 0.25rem;
}
.card section aside p {
  display: block;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
}
.card section aside.valid span {
  text-align: right;
}
.card section aside.valid p {
  text-align: right;
}
</style>
