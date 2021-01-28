<template>
  <div class="AddCard">
    <h1>Add Card</h1>

    <article class="card evil">
      <header>
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iODQiIHZpZXdCb3g9IjAgMCA1MCA4NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeT0iNDQiIHdpZHRoPSI1MCIgaGVpZ2h0PSI0MCIgcng9IjgiIGZpbGw9IiNFQ0U2REYiLz4KPGxpbmUgeTE9IjU2LjUiIHgyPSIxOCIgeTI9IjU2LjUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS1vcGFjaXR5PSIwLjExIi8+CjxsaW5lIHgxPSIzMyIgeTE9IjU2LjUiIHgyPSI1MCIgeTI9IjU2LjUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS1vcGFjaXR5PSIwLjExIi8+CjxsaW5lIHgxPSIzMi41IiB5MT0iNDQiIHgyPSIzMi41IiB5Mj0iODQiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS1vcGFjaXR5PSIwLjExIi8+CjxsaW5lIHkxPSI3MC41IiB4Mj0iMTgiIHkyPSI3MC41IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utb3BhY2l0eT0iMC4xMSIvPgo8bGluZSB4MT0iMzIiIHkxPSI3MC41IiB4Mj0iNTAiIHkyPSI3MC41IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utb3BhY2l0eT0iMC4xMSIvPgo8bGluZSB4MT0iMTguNSIgeTE9IjQ0IiB4Mj0iMTguNSIgeTI9Ijg0IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utb3BhY2l0eT0iMC4xMSIvPgo8ZyBvcGFjaXR5PSIwLjUiPgo8cGF0aCBkPSJNMzIuODQ4NyAyNi41MDA5QzMzLjUyNjcgMjcuMTY1NyAzMy41MjY3IDI4LjI0NDEgMzIuODQ4NyAyOC45MDk3QzMyLjE2OTggMjkuNTc1MyAzMS4wNjkzIDI5LjU3NTMgMzAuMzkxMyAyOC45MDk3QzI3LjQxNjkgMjUuOTk0MSAyMi41Nzc4IDI1Ljk5NDEgMTkuNjAzOCAyOC45MDk3QzE4LjkyNDkgMjkuNTc1MyAxNy44MjQgMjkuNTc1MyAxNy4xNDYgMjguOTA5N0MxNi44MDY3IDI4LjU3NzEgMTYuNjM3OCAyOC4xNDIzIDE2LjYzNzggMjcuNzA0OUMxNi42Mzc4IDI3LjI2OTIgMTYuODA3MiAyNi44MzMxIDE3LjE0NiAyNi41MDA5QzIxLjQ3NTYgMjIuMjU2NyAyOC41MTkxIDIyLjI1NjcgMzIuODQ4NyAyNi41MDA5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTM4LjgxODYgMjEuMDczQzM5LjQ5NjcgMjEuNzM4MSAzOS40OTY3IDIyLjgxNyAzOC44MTg2IDIzLjQ4MjZDMzguMTM5NyAyNC4xNDgyIDM3LjAzOTcgMjQuMTQ4MiAzNi4zNjEyIDIzLjQ4MjZDMzAuMDk1NiAxNy4zMzkgMTkuOTAwNCAxNy4zMzkgMTMuNjM0OCAyMy40ODI2QzEyLjk1NjMgMjQuMTQ4MiAxMS44NTU0IDI0LjE0ODIgMTEuMTc3OCAyMy40ODI2QzEwLjgzODYgMjMuMTUgMTAuNjY4MyAyMi43MTM1IDEwLjY2ODMgMjIuMjc3OEMxMC42NjgzIDIxLjg0MTIgMTAuODM4NiAyMS40MDYgMTEuMTc3OCAyMS4wNzNDMTQuODY5IDE3LjQ1MzggMTkuNzc3MiAxNS40NjA4IDI0Ljk5NzggMTUuNDYwOEMzMC4yMTg0IDE1LjQ2MDggMzUuMTI2NiAxNy40NTM4IDM4LjgxODYgMjEuMDczWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTQ0LjI4NjYgMTUuMDIwNEM0NC45NjUgMTUuNjg1NiA0NC45NjUgMTYuNzY0NCA0NC4yODY2IDE3LjQyOTZDNDMuNjA4MSAxOC4wOTQ4IDQyLjUwODEgMTguMDk0OCA0MS44Mjk2IDE3LjQyOTZDMzcuMzMzMiAxMy4wMjE4IDMxLjM1NTQgMTAuNTk0NSAyNC45OTc0IDEwLjU5NDVDMTguNjM5NCAxMC41OTQ1IDEyLjY2MiAxMy4wMjE4IDguMTY2NTEgMTcuNDI5NkM3LjQ4NzE1IDE4LjA5NDggNi4zODcxNSAxOC4wOTQ4IDUuNzA5MTEgMTcuNDI5NkM1LjM2OTg3IDE3LjA5NyA1LjIwMDQ3IDE2LjY2MDkgNS4yMDA0NyAxNi4yMjQ4QzUuMjAwNDcgMTUuNzg5MSA1LjM3MDMxIDE1LjM1MyA1LjcwOTExIDE1LjAyMDRDMTAuODYxMSA5Ljk2OTAxIDE3LjcxMTkgNy4xODc1MiAyNC45OTc0IDcuMTg3NTJDMzIuMjg0MiA3LjE4NzUyIDM5LjEzNDYgOS45NjkwMSA0NC4yODY2IDE1LjAyMDRaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+Cjwvc3ZnPgo="
          alt="chip"
        />
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iMzQiIHZpZXdCb3g9IjAgMCAzOCAzNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOSAzNEMyOC4zODg4IDM0IDM2IDI2LjM4ODggMzYgMTdDMzYgMTUuMDE0NSAzNS42NTk2IDEzLjEwODQgMzUuMDM0IDExLjMzNzFDMzYuOTExOSA4LjQzNzIyIDM4IDQuOTkzNjcgMzggMS4zQzM4IDAuNjMxNTQ2IDM3LjA1ODUgMC41NjgxODYgMzYuODIzMSAxLjE5MzgxQzM1Ljk1ODUgMy40OTE2NyAzNC42NDgyIDUuNTc2NjkgMzIuOTk1NiA3LjM0NzI2QzI5LjkyODMgMi45MDg0IDI0LjgwMzggMCAxOSAwQzEzLjE5NjIgMCA4LjA3MTY2IDIuOTA4NCA1LjAwNDM4IDcuMzQ3MjZDMy4zNTE3NyA1LjU3NjY5IDIuMDQxNTIgMy40OTE2NiAxLjE3NjkxIDEuMTkzODFDMC45NDE1MDIgMC41NjgxODMgMCAwLjYzMTU0MyAwIDEuM0MwIDQuOTkzNjcgMS4wODgwOSA4LjQzNzIyIDIuOTY2IDExLjMzNzFDMi4zNDAzOSAxMy4xMDg0IDIgMTUuMDE0NSAyIDE3QzIgMjYuMzg4OCA5LjYxMTE2IDM0IDE5IDM0Wk0xMy41MTM4IDEzLjE1MDFDMTMuOTgwOSAxMi45ODAxIDE0LjUwMiAxMy4xNzkxIDE0LjczNjkgMTMuNjE3MkwxNy4zOTE3IDE4LjU2NzFDMTcuODI5MyAxOS4zODMxIDE3LjAxODcgMjAuMzA0MyAxNi4xNTM3IDE5Ljk3NEw4LjIyMDUxIDE2Ljk0NDRDNy4zNTU1NSAxNi42MTQxIDcuMzY1MjggMTUuMzg3MSA4LjIzNTM2IDE1LjA3MDVMMTMuNTEzOCAxMy4xNTAxWk0yNS4yODc1IDEzLjE1QzI0LjgyMDMgMTIuOTggMjQuMjk5MyAxMy4xNzkgMjQuMDY0MyAxMy42MTcxTDIxLjQwOTUgMTguNTY3QzIwLjk3MTggMTkuMzgyOSAyMS43ODI1IDIwLjMwNDEgMjIuNjQ3NSAxOS45NzM4TDMwLjU4MDcgMTYuOTQ0NEMzMS40NDU2IDE2LjYxNDEgMzEuNDM1OSAxNS4zODcxIDMwLjU2NTggMTUuMDcwNUwyNS4yODc1IDEzLjE1WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="
          alt="Evil Corp"
        />
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
