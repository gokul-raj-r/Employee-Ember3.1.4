import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  ajax: service(),

  actions: {
    submitForm(model) {
      let { name, age, email, salary } = model;
      console.log(model);
      if (name == undefined || name.trim() == "" || !/^[a-zA-Z]+$/.test(name)) {
        alert("Invalid Name");
        return;
      }

      if (
        age == undefined ||
        18 > age ||
        age > 80 ||
        age.trim() == "" ||
        !/^[0-9]+$/.test(age)
      ) {
        alert("Age should between 18 to 80");
        return;
      }

      if (
        email == undefined ||
        email.trim() == "" ||
        !/^([\w]+)[a-z0-9.]+@[\w]+\.[\w]+$/.test(email)
      ) {
        alert("Invalid email");
        return;
      }

      if (
        salary == undefined ||
        salary.trim() == "" ||
        !/^[0-9]+$/.test(salary)
      ) {
        alert("Invalid salary");
        return;
      }

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
