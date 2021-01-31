import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  data() {
    return {
      activeCardIndex: 0,
      cardArray: [
       {
          id: "432984728397",
          cardName: "The name",
          cardVendor: "bitcoin",
          cardNumber: "XXXXYYYYZZZZFFFF",
          cardMonth: "12",
          cardYear: "22"
        },
      ]
    };
  },
  router,
  render: h => h(App)
}).$mount("#app");
