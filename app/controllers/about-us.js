import Controller from "@ember/controller";

export default Controller.extend({
  data: "Meet Securden",
  dataSub: "We stand for simplicity and affordability in cybersecurity",

  contact: "support@securden.com",

  isContactVisible: false,

  actions: {
    toggle() {
      console.log("---toggleContactVisibility called---");
      //   return true;
      this.toggleProperty("isContactVisible");
    },
  },
});
