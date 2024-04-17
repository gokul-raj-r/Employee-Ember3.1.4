import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  ajax: service(),
  router: service(),
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

  actions: {
    deleteRecord(id) {
      console.log("employee id ", id);

      this.get("ajax")
        .request(`/employee/remove/${id}`, {
          method: "POST",
          contentType: "application/json",
        })
        .then((response) => {
          // Handle successful response
          console.log("Response:", response);
          this.data.filter((obj) => obj.id != id);
        })
        .catch((error) => {
          // Handle error
          console.error("Error:", error);
        });

      this.fetchData();
    },
  },
});
