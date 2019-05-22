export default class {
  static stringToSlug(string) {
    string = string.replace(/^\s+|\s+$/g, ""); // trim
    string = string.toLowerCase();

    string = string
      .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
      .replace(/\s+/g, "-") // collapse whitespace and replace by -
      .replace(/-+/g, "-"); // collapse dashes

    return string;
  }
}
