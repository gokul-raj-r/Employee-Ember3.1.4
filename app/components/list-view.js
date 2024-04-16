import Component from "@ember/component";

export default Component.extend({
  data: [],

  init() {
    this._super(...arguments);
    this.fetchData();
  },

  fetchData() {
    fetch("/employee")
      .then((response) => response.json())
      .then((data) => {
        this.set("data", data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },
});
