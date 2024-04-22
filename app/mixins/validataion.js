import Mixin from "@ember/object/mixin";

export default Mixin.create({
  validate(...data) {
    let [name, age, email, salary] = data;
    console.log("...called...");
    if (name == undefined || name.trim() == "" || !/^[a-zA-Z]+$/.test(name)) {
      alert("Invalid Name");
      return false;
    }

    if (
      age == undefined ||
      18 > age ||
      age > 80 ||
      age.trim() == "" ||
      !/^[0-9]+$/.test(age)
    ) {
      alert("Age should between 18 to 80");
      return false;
    }

    if (
      email == undefined ||
      email.trim() == "" ||
      !/^([\w]+)[a-z0-9.]+@[\w]+\.[\w]+$/.test(email)
    ) {
      alert("Invalid email");
      return false;
    }

    if (
      salary == undefined ||
      salary.trim() == "" ||
      !/^[0-9]+$/.test(salary)
    ) {
      alert("Invalid salary");
      return false;
    }

    return true;
  },
});
