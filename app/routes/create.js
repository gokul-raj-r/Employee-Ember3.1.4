import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";
import validatemixin from "../mixins/validataion";

export default Route.extend(validatemixin, {
  ajax: service(),

  actions: {
    submitForm(model1) {
      let { name, age, email, salary } = model1;

      name = name.trim();
      age = age.trim();
      email = email.trim();
      salary = salary.trim();
      name = name.charAt(0).toUpperCase() + name.slice(1);
      let employee = { name, age, email, salary };

      this.postEmployeeData(employee);

      this.get("router").transitionTo("index");
    },
  },

  postEmployeeData(employee) {
    this.get("ajax")
      .request("/employee/new", {
        method: "POST",
        data: employee,
        contentType: "application/json",
      })
      .then((response) => {
        // Handle successful response
        console.log("Response:", response);
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });
  },
});
