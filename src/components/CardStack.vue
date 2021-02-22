<template>
    <section>
        <div @click="setCardIndex(index)" class="cardContainer" v-for="(card, index) in cardarray" v-bind:key="card.id">
            <Card v-bind:card="card"/>
            <button @click="removeCard(index)" class="removeCard taBort">X</button>
        </div>
    </section>
</template> 


<script>
import Card from "@/components/Card.vue";

export default {
  name: "cardStack",
  props: {
      cardarray: {
          type: Array,
      },
  },

    components: {
      Card,
    },

    methods: {
        setCardIndex(index) {
            this.$root.activeCardIndex=index;
        },
        removeCard(index) {
            this.$root.cardArray.splice(index, 1);
        },
    }
};
</script>


<style scoped>
.removeCard{
    margin-top: 90px; 
    font-size: 1.2rem;
    font-weight: 700;
    text-decoration: none;
    color: rgb(168, 46, 46);
    border: .125rem solid rgb(119, 56, 56);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: .9rem;
    margin: -1rem;
    height: 1.9rem;

}
.removeCard:hover{
    cursor: pointer;
    background: rgb(206, 206, 206);
}
.cardContainer {
    position: relative;

}
.taBort{
    position: absolute;
    top: 0;
    right: 0;
}

main {
  display: block;
}
#home {
    width: 352px;
}
#app {
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: PT Mono,monospace;
    padding: 1rem;
    height: 100vh;
    max-width: 26rem;
    margin: 0 auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.top {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    text-transform: uppercase;
}
h1 {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
h1, h2, h3 {
    font-family: Source Sans Pro,sans-serif;
}
.top p {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    font-size: .8rem;
    font-weight: 600;
    color: rgba(0,0,0,.4);
    padding: .25rem;
}
.top h1, .top p {
    text-align: center;
    margin: 0;
}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.ninja {
    background: linear-gradient(248.3deg,hsla(0,0%,100%,.15),hsla(0,0%,100%,0)),#222;
    color: #fff;
}
.card header img {
    opacity: .8;
}
.card header [alt=chip] {
    -ms-flex-item-align: end;
    align-self: flex-end;
    opacity: 1;
}
.card {
    max-width: 24rem;
    height: 14rem;
    border-radius: .6rem;
    background: #eee;
    padding: 1rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-shadow: 0 0 0.5rem rgba(0,0,0,.4);
    box-shadow: 0 0 0.5rem rgba(0,0,0,.4);
    display: grid;
    gap: .5rem 0;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 2.8rem;
    text-shadow: -1px -1px 2px hsla(0,0%,100%,.4);
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
}
.card section.info, .card section.number {
    grid-column: auto/span 2;
    grid-row: auto/span 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.card section.number {
    font-size: 1.6rem;
    letter-spacing: .05rem;
    padding: .5rem 0 0;
    text-transform: uppercase;
}
.card section.info, .card section.number {
    grid-column: auto/span 2;
    grid-row: auto/span 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.card section.info aside.holder {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.card section aside span {
    display: block;
    text-transform: uppercase;
    font-size: .7rem;
    margin: 0 0 .25rem;
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
.card-stack {
    margin: 2rem 0 12rem;
    display: grid;
    grid-auto-rows: 4rem;
}
.blockchain {
    background: linear-gradient(248.52deg,rgba(0,0,0,.15) 1.49%,transparent),#8b58f9;
    color: #fff;
}
.bitcoin {
    background: linear-gradient(.689turn,hsla(0,0%,100%,.15),hsla(0,0%,100%,0) 99.07%),#ffae34;
    color: #222;
}
.ninja {
    background: linear-gradient(248.3deg,hsla(0,0%,100%,.15),hsla(0,0%,100%,0)),#222;
    color: #fff;
}
a.cta {
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

a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
}
.evil {
    background: linear-gradient(248.3deg,rgba(0,0,0,.16),transparent),#f33355;
    color: #fff;
}
a.cta :hover {
  background-color: #000;
}
.card:hover {
    cursor: pointer;
}
</style>