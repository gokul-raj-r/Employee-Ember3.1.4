import { helper } from "@ember/component/helper";

export function ageValidate(age /*, hash*/) {
  console.log(age);
  if ((age > 18 && age < 80) || age == undefined || age == "") {
    return false;
  }
  return true;
}

export default helper(ageValidate);
