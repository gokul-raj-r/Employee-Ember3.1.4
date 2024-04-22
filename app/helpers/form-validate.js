import { helper } from "@ember/component/helper";

export function formValidate(params, hash) {
  let [name, age, email, salary] = params;
  console.log("name, age, email, salary", name, age, email, salary);
  if (name && age && email && salary) {
    return validate(name, age, email, salary);
  }

  return true;
}

export default helper(formValidate);

function validate(name, age, email, salary) {
  console.log("in validate", name, age, email, salary);
  if (name.trim() == "" || !/^[a-zA-Z]+$/.test(name)) {
    console.log("Invalid Name");
    return true;
  }
  console.log("age: ", typeof age);
  if (18 > age || age > 80 || !/^[0-9]+$/.test(age)) {
    console.log("Age should between 18 to 80");
    return true;
  }

  if (email.trim() == "" || !/^([\w]+)[a-z0-9.]+@[\w]+\.[\w]+$/.test(email)) {
    console.log("Invalid email");
    return true;
  }
  console.log("salary: ", typeof salary);
  if (!/^[0-9]+$/.test(salary)) {
    console.log("Invalid salary");
    return true;
  }

  return false;
}
