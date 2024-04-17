import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  data: [],

  model(params) {
    console.log("printing params : ", params.id);

    fetch(`/employee/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        this.set("data", data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    return this.data;
  },

  ajax: service(),

  actions: {
    submitForm(model) {
      let { id, name, age, email, salary } = model;
      console.log(model);
      if (name == undefined || name.trim() == "" || !/^[a-zA-Z]+$/.test(name)) {
        console.error("Invalid Name");
        return;
      }

      if (
        age == undefined ||
        0 >= age ||
        age > 80 ||
        age.trim() == "" ||
        !/^[0-9]+$/.test(age)
      ) {
        console.error("Invalid age", age);
        return;
      }

      if (
        email == undefined ||
        email.trim() == "" ||
        !/^([\w]+)[a-z0-9.]+@[\w]+\.[\w]+$/.test(email)
      ) {
        console.error("Invalid email");
        return;
      }

      console.log("salary:=>", salary);
      if (salary == undefined || !/^[0-9]+$/.test(salary)) {
        console.error("Invalid salary");
        return;
      }

      console.log(typeof age);
      console.log(typeof salary);

      name = name.trim();
      age = age.trim();
      email = email.trim();
      //   salary = salary.trim();
      name = name.charAt(0).toUpperCase() + name.slice(1);

      let employee = { id, name, age, email, salary };

      this.postEmployeeData(employee);

      this.get("router").transitionTo("index");
    },
  },

  postEmployeeData(employee) {
    this.get("ajax")
      .request("/employee/edit", {
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
