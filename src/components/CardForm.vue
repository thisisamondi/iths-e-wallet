<template>
<div>
    <main id="add-card">
<section>
    <!-- FORM -->
  <form class="card-form" @submit="onSubmit">
      <!-- CARD NUMBER -->
    <label for="number" class="col-2">Card Number</label>
    <input
      type="text"
      v-model="card.cardNumber"
      maxlength="16"
      placeholder="xxxx xxxx xxxx xxxx"
      class="col-2"
      required
      />
      <!-- CARD NAME -->
    <label for="cardholder" class="col-2">Cardholder Name</label>
    <input
      type="text"
      v-model="card.cardName"
      placeholder="First and Last Name"
      class="col-2"
      required
    />

<!-- MONTH LABEL -->
    <label for="month" class="col-1">Month</label>

<!-- YEAR LABEL -->
    <label for="year" class="col-1">Year</label>

<!-- MONTH -->
    <input
      list="months"
      v-model="card.cardMonth"
      optional-value="1"
      placeholder="MM"
      class="col-1"
      required
    />

    <datalist class="col-1" id="months">
      <option value="01" />
      <option value="02" />
      <option value="03" />
      <option value="04" />
      <option value="05" />
      <option value="06" />
      <option value="07" />
      <option value="08" />
      <option value="09" />
      <option value="10" />
      <option value="11" />
      <option value="12" />
    </datalist>

<!-- YEAR!!!!-->

    <input
      list="year"
      v-model="card.cardYear"
      optional-value="1"
      placeholder="YY"
      class="col-1"
      required
    />
    <datalist id="year">
      <option value="21" />
      <option value="22" />
      <option value="23" />
      <option value="24" />
      <option value="25" />
      <option value="26" />
      <option value="27" />
      <option value="28" />
      <option value="29" />
      <option value="30" />
      <option value="31" />
    </datalist>
<!-- VENDOR -->
    <label for="vendor" class="col-2">Vendor</label> 
    <input
      list="vendor"
      v-model="card.cardVendor"
      optional-value="1"
      placeholder=""
      class="col-2"
      required
    />
    <datalist id="vendor">
        <option value="Bitcoin Inc">Bitcoin Inc</option> 
        <option value="Blockchain Inc">Blockchain Inc</option> 
        <option value="Evil Corp">Evil Corp</option> 
        <option value="Ninja Bank">Ninja Bank</option>
    </datalist>
<!-- BUTTON ADD CARD -->
    <button class="cta" type="submit">Add Card</button>
  </form>
</section>

  </main>
 </div>
</template>

<script>
export default {
  name: "CardForm",

  props: {
    card: {
      type: Object
    }
  },

  methods: {
    onSubmit(e) {
      const card = {
        id: Date.now(),
        cardName: this.card.cardName,
        cardVendor: this.card.cardVendor,
        cardNumber: this.card.cardNumber,
        cardMonth: this.card.cardMonth,
        cardYear: this.card.cardYear
      };

      this.$root.cardArray.push(card);
      this.$router.push("/");
      e.preventDefault();
    }
  },

};
</script>

<style>
.card-form {
    margin: 2rem 0 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 1rem;
}

.card-form label {
    padding: .25rem 0;
    font-size: .7rem;
    text-transform: uppercase;
}

.col-2 {
    grid-column: auto/span 2;
}

label {
    cursor: default;
    text-align: start;
}

.card-form input, datalist {
    border: 1px solid #000;
    border-radius: .25rem;
    padding: .5rem;
    height: 2.6rem;
    margin: 0 0 .8rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 1rem;
    width: 100%;
}

input {
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: textfield;
    background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
    -webkit-rtl-ordering: logical;
    cursor: text;
    margin: 0em;
    font: 400 13.3333px Arial;
    padding: 1px 2px;
    border-width: 2px;
    border-style: inset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
}
#app {
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: PT Mono,monospace;
    padding: 1rem;
    height: 100vh;
    max-width: 24rem;
    margin: 0 auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
    color: #2c3e50;
  
}

.col-1 {
    grid-column: auto / span 1;
}
form {
    display: block;
}

button {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 4rem;
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 700;
    text-decoration: none;
    color: #000;
    border: .125rem solid #000;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: .5rem;
    margin: 2rem 0;
}
button:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
}
button.cta:hover {
    background-color:black;
    color: white;
    cursor: pointer;
}

button.cta {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 4rem;
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 700;
    text-decoration: none;
    color: #000;
    border: .125rem solid #000;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: .5rem;
    margin: 2rem 0;
    grid-column: 1 / span 2;
}


</style>
