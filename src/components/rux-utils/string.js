export default class {
  static capitalize(val) {
    if (!val) return;
    console.log(val);
    return val.charAt(0).toUpperCase() + val.substring(1);
  }
}
